/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from 'path';

const nextConfig = {
    webpack: config => {
        // Add path alias for '@'
        config.resolve.alias['@'] = resolve(__dirname, 'src'); // Adjust if your source directory is different

        config.resolve.fallback = {
            fs: false,
            net: false,
            tls: false,
            http2: false,
            dns: false,
            child_process: false
        };

        return config;
    },
    reactStrictMode: true
};

export default nextConfig;
