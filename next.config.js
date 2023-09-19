/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.pexels.com",
            },
            {
                protocol: "https",
                hostname: "*.medium.com",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            }
        ]
    }
}

module.exports = nextConfig
