import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

async function ProfilePage() {
    const session = await auth();

    if (!session) {
        return redirect("/signIn");
    }
    return (
        <div>
            <h1>Добро пожаловать, {session.user?.name || session.user?.email}!</h1>
            <p>Ваш ID: {session.user?.id}</p>

            <form
                action={async () => {
                    "use server";
                    await signOut({ redirectTo: "/signIn" });
                }}
            >
                <button type="submit">Выйти</button>
            </form>
        </div>
    )
}
export default ProfilePage;

