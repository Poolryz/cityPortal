import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from 'pg'; // 👈 Важно: добавляем пул из pg

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};

// ✅ Создаём пул соединений с правильными настройками
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10, // Максимальное количество соединений в пуле
    idleTimeoutMillis: 30000, // Закрывать неактивные соединения через 30 сек
    connectionTimeoutMillis: 5000, // Таймаут подключения
    maxUses: 7500, // Пересоздавать соединение после 7500 использований
});

// ✅ Обработка ошибок пула
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
    pool, // 👈 Передаём настроенный пул
});

const prisma = globalForPrisma.prisma || new PrismaClient({
    adapter,
    // ✅ Дополнительные настройки Prisma
    log: process.env.NODE_ENV === 'development'
        ? ['query', 'info', 'warn', 'error']
        : ['error'],
    errorFormat: 'pretty',
});

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

// ✅ Graceful shutdown - закрываем соединения при завершении
const closeConnections = async () => {
    console.log('Closing database connections...');
    await prisma.$disconnect();
    await pool.end();
    process.exit(0);
};

process.on('SIGTERM', closeConnections);
process.on('SIGINT', closeConnections);

// ✅ Для Next.js - закрываем соединения при перезагрузке в dev режиме
if (process.env.NODE_ENV === 'development') {
    process.on('beforeExit', async () => {
        await prisma.$disconnect();
        await pool.end();
    });
}

export default prisma;