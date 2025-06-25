import withPWA from 'next-pwa';

const nextConfig = {
    reactStrictMode: true,
    // Add any other Next.js config here
};

const pwaConfig = {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
};

export default withPWA({
    ...nextConfig,
    pwa: pwaConfig,
});
