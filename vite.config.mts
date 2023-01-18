import { sveltekit } from 'npm:@sveltejs/kit/vite';
import { defineConfig, extractorSvelte, presetUno, presetAttributify, transformerDirectives } from 'npm:unocss';
import unovite from 'npm:unocss/vite';
import type { UserConfig } from 'npm:vite';


const unoconfig = defineConfig({
    transformers: [transformerDirectives()],
    extractors: [extractorSvelte],
    presets: [
        presetAttributify(),
        presetUno(),
    ]
});

const config: UserConfig = {
    plugins: [
        unovite(unoconfig),
        sveltekit(),
    ]
}

export default config;
