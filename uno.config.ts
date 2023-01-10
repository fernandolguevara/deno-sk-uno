import { defineConfig, extractorSvelte, presetUno, transformerDirectives } from 'npm:unocss'

export default defineConfig({
  transformers: [transformerDirectives()],
  extractors: [extractorSvelte],
  presets: [
    presetUno(),
  ],
  shortcuts: {
    btn: 'bg-red' // example of shortcut
  }
})