/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // basePath: '/',
    // assetPrefix: '//',

    trailingSlash: true,
    sassOptions: {
        prependData: `@import 'styles/vars';@import 'styles/bp';@import 'styles/bp-min';@import 'styles/bpr';@import 'styles/mixins';`,
    },
};

module.exports = nextConfig;
