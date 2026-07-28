import Link from "next/link";
import checkAuth from "@/app/actions/auth";

async function AdminPage() {
    await checkAuth()

    return (
        <nav className="flex flex-col gap-2">
            <Link href={'/'}>Домой</Link>
            <Link href={'/calendar'}>Календарь</Link>
            <Link href={'/admin/addevent'}>Добавить евент</Link>
            <Link href={'/admin/editevent'}>Редактировать евент</Link>
            <Link href={'/admin/deleteevent'}>Удалить евент</Link>
        </nav>
    )
}

export default AdminPage;