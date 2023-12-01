'use serve'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async (request) => {
    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDash = new URL('/pages/dashboard', request.url);
    const isTokenValidated = await validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' || request.nextUrl.pathname === '/pages/registro' || request.nextUrl.pathname === '/pages/alterar') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated) {
        if (request.nextUrl.pathname === "/") {
            return NextResponse.redirect(urlDash);
        }
    }

    NextResponse.next();
};

export const config = {
    matcher: ['/', '/pages/:path*']
};
