import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function checkAuth() {
    const session = await auth();
    if (!session) {
        return redirect("/signin")
    }
}
export default checkAuth