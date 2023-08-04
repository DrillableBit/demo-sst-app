/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_APP_REGION: process.env.NEXT_APP_REGION,
        // NEXT_PUBLIC_API_URL: 'https://api.example.com',
        // OTHER_VARIABLE: 'some value',
        NEXTAUTH_URL_INTERNAL: "http://127.0.0.1:3000",
        NEXTAUTH_URL: process.env.NEXT_PUBLIC_SITE_URL,
        NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
      },
}

module.exports = nextConfig
