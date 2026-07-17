import { auth } from '@/auth'


export const config = {
    matcher: ['/admin/:path*'],
}
export async function proxy(request: Request) {
    const session = await auth()
    if (!session) {
        const signInUrl = new URL('/signin', request.url)
        signInUrl.searchParams.set('callbackUrl', request.url)
        return Response.redirect(signInUrl)
    }
}