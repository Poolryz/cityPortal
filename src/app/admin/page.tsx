import Link from "next/link";

function AdminPage() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/admin">Home admin</Link>
                </li>
                <li>
                    <Link href="/admin/getevent">Добавить событие в календарь</Link>
                </li>
            </ul>
        </nav>
    )
}

export default AdminPage;