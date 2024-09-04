import { auth } from "./auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/admin/films", "/admin/films/create-film"]

export default async function middleware(request: NextRequest) {
    const session = await auth();

    const isProtected = protectedRoutes.some((route) => 
        request.nextUrl.pathname.startsWith(route)
    );

    if (!session && isProtected) {
        const absoluteURL = new URL("/admin", request.nextUrl.origin);
        return NextResponse.redirect(absoluteURL.toString());
    }

    return NextResponse.next();
}
