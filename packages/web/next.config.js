/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: 'https://api.example.com',
        OTHER_VARIABLE: 'some value',
      },
}

module.exports = nextConfig
