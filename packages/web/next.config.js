/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_BUCKET+ ".s3." + process.env.NEXT_PUBLIC_REGION + ".amazonaws.com"],
  },
  env: {
    STRIPE_KEY: process.env.NEXT_PUBLIC_STRIPE_KEY,
    NEXT_APP_REGION: process.env.NEXT_APP_REGION,
    // NEXT_PUBLIC_API_URL: 'https://api.example.com',
    // OTHER_VARIABLE: 'some value',
    NEXTAUTH_URL_INTERNAL: "http://localhost:3000",
    NEXT_PUBLIC_URL: "http://localhost:3000",
    // NEXTAUTH_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    // URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
