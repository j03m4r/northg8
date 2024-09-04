"use server";

import { signIn as nextAuthSignIn, signOut as nextAuthSignOut } from "@/auth";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";

export const signIn = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get("email") || "",
        password: formData.get("password"),
        redirectTo: "/admin/films"
    }

    try {
        await nextAuthSignIn("credentials", rawFormData); 
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials." }
                default:
                    return { error: "Something went wrong."}
            }
        }

        throw error;
    }

    revalidatePath("/admin/films")
}

export const signOut = async () => {
    await nextAuthSignOut({
        redirectTo: "/admin"
    });
}
