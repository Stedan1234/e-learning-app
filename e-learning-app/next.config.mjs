import withPWA from 'next-pwa';

const pwaConfig = {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
};

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
};

export default withPWA({
    ...nextConfig,
    pwa: pwaConfig,
});