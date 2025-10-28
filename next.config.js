/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    reactStrictMode: true,
    allowedDevOrigins: [
        '192.168.1.84',
        'devserver-dev--lambent-pie-62f7f2.netlify.app'
    ]
};

module.exports = nextConfig;
