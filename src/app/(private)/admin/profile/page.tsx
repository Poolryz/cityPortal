import checkAuth from "@/app/actions/auth";
import { auth, signOut } from "@/auth";
type Session = {
    user?: {
        id?: string;
        name?: string | null;  // Добавляем null
        email?: string | null; // Добавляем null
        image?: string | null; // Добавляем null
    };
    expires: string;
} | null;

async function ProfilePage() {
    await checkAuth()
    const session: Session = await auth();
    if (!session?.user) {
        return <div>Ошибка: сессия не найдена</div>;
    }
    return (
        <div>
            <h1>Добро пожаловать, {session.user?.name || session.user?.email}!</h1>
            <p>Ваш ID: {session.user?.id}</p>

            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/signin" });
                }}
            >
                <button type="submit">Выйти</button>
            </form>
        </div>
    )
}
export default ProfilePage;

