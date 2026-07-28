import checkAuth from "@/app/actions/auth";
import { auth, signOut } from "@/auth";

async function ProfilePage() {
    await checkAuth()
    const session = await auth();
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

