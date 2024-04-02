import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
    plugins: [react(), wasm(), topLevelAwait(), svgr(), nodePolyfills()],

    server: {
        proxy: {
            '/submit/tx': 'http://relaydb.blackrocket.space:8090/api/',
        },
    },

    resolve: {
        alias: {
            app: '/src/app',
            entities: '/src/entities',
            features: '/src/features',
            pages: '/src/pages',
            shared: '/src/shared',
            widgets: '/src/widgets',
        },
    },
});
