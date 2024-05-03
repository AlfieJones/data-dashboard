/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/mock.js',
                destination: 'http://localhost:3000/mock.js',
            },
        ]
    },
}

module.exports = nextConfig
