
export { default } from "next-auth/middleware"




export const config = { matcher: ["/about", "/profile/:path*", "/settings", "/uploads", "/note" ] }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export function middleware(request: NextRequest) {

//   if (request.nextUrl.pathname.startsWith('/about')) {
//     return NextResponse.rewrite(new URL('/about-2', request.url))
//   }
 
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//   }
// }





// import { getSession } from 'next-auth/react';
// import type { NextRequest, NextResponse } from 'next/server';

// // Define a list of routes that require authentication
// const authenticatedRoutes = ['/dashboard', '/profile'];

// // Define a list of routes that should be accessible only when unauthenticated
// const unauthenticatedRoutes = ['/login', '/register'];

// export async function middleware(request: NextRequest) {
//   // Get the user's session
//   const session = await getSession({ req: request });

//   // Check the path against your list of authenticated routes
//   const isAuthRoute = authenticatedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

//   // Check the path against your list of unauthenticated routes
//   const isUnauthRoute = unauthenticatedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

//   if (isAuthRoute && !session) {
//     // Redirect unauthenticated users away from authenticated routes
//     return NextResponse.redirect('/login');
//   }

//   if (isUnauthRoute && session) {
//     // Redirect authenticated users away from login/register pages
//     return NextResponse.redirect('/dashboard');
//   }

//   return NextResponse.next();
// }

// export const config = {
//   // This is an example; you can modify the matcher according to your requirements
//   matcher: '/:path*',
// };








// // import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// // export function middleware(request: NextRequest) {
// //   if (request) {
// //     const cookies: any = request.cookies;
// //     const parsedCookies: Map<string, any> = cookies._parsed;
// //     const sessionTokenObject = parsedCookies.get("next-auth.session-token");
// //     if (sessionTokenObject) {
// //       const sessionToken = sessionTokenObject.value;
// //       const requestHeaders = new Headers(request.headers);
// //       requestHeaders.set("x-hello-from-middleware1", "hello");
// //       requestHeaders.set("Authorization", `Bearer 123 ${sessionToken}`);
// //       const response = NextResponse.next({
// //         request: {
// //           // New request headers
// //           headers: requestHeaders,
// //         },
// //       })

// //       return response
// //     } else {
// //       console.log("Session Token not found.");
// //     }
// //   }
// // }

// // export const config = {
// //   matcher: "/:path*",
// // };
