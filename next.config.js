/** @type {import('next').NextConfig} */
// https://raw.githubusercontent.com/douglasmatosdev/todo-app-without-context-management/main/docs/todo-app-desktop-dark-mode.png
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/douglasmatosdev/**'
            },
            {
                protocol: 'https',
                hostname: 's3.amazonaws.com',
                port: '',
                pathname: '/hr-challenge-images/**'
            },
            {
                protocol: 'https',
                hostname: 'images.stockcake.com',
                port: '',
                pathname: '/public/**'
            }
        ]
    }
}

module.exports = nextConfig
