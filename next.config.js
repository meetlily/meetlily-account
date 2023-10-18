/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // experimental: {
    //     serverActions: true,
    // },
    images: {
        domains: ['avatars.githubusercontent.com','lh3.googleusercontent.com', 'tailwindui.com', 'images.unsplash.com'],
    }
}
module.exports = nextConfig