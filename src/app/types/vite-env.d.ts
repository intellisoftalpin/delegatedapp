/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

interface ImportMetaEnv {
    readonly VITE_BLOCKFROST_API_KEY: string;
    readonly VITE_TITLE_KEY: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
