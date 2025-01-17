require('dotenv').config()
const { sizes } = require('./blocks/Image/sizes.json')

module.exports = {
    publicRuntimeConfig: {
        SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    },
    images: {
        domains: [
            'localhost',
            // Your domain(s) here
        ],
        deviceSizes: sizes,
    },
    webpack: (
        config,
        { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
    ) => {
        config.module.rules.push({
            test: /\.svg/,
            type: 'asset/resource',
        })
        // Important: return the modified config
        return config
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
}
