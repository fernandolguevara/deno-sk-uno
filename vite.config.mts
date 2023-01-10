import { sveltekit } from 'npm:@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCSS from 'npm:unocss/vite';


const config: UserConfig = {
plugins: [UnoCSS(), sveltekit()],
}

export default config;
