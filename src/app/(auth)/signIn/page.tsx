import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
    const session = await auth();
    if (session) {
        redirect("/admin/profile");
    }

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
            <h1>Вход в систему</h1>

            <form
                action={async (formData) => {
                    "use server";

                    const email = formData.get("email") as string;
                    const password = formData.get("password") as string;

                    try {
                        await signIn("credentials", {
                            email,
                            password,
                            redirectTo: "/admin/profile",
                        });
                    } catch (error) {
                        // Обработка ошибок
                        console.error("Ошибка входа:", error);
                        // Можно вернуть ошибку на страницу
                    } finally {
                        redirect("/admin/profile");
                    }
                }}
                style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        backgroundColor: "#0070f3",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Войти
                </button>
            </form>
        </div>
    );
}