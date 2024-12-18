/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
    },
    images: {
        remotePatterns: [
            {
              protocol: "https",
              hostname: "res.cloudinary.com",
              port: "", 
              pathname: "/**", 
            },
        ]
      },
}

module.exports = nextConfig
