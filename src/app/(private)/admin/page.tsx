import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function AdminPage() {
    const session = await auth();

    if (!session) {
        return redirect("/signin");
    }

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