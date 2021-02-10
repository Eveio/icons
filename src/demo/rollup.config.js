import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import html from '@rollup/plugin-html'
import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/demo/app.js',
  output: {
    globals: {
      'vue': 'Vue'
    },
    dir: 'demo',
    format: 'esm',
    entryFileNames: '[name].[hash].js',
    chunkFileNames: '[name].[hash].js'
  },
  plugins: [
    replace({'process.env.NODE_ENV': JSON.stringify( 'production')}),
    resolve(),
    commonjs(),
    typescript(),
    vue(),
    terser(),
    html({
      title: '@eveio/icons Demo',
      meta: [{
        name: 'viewport',
        content: 'width=device-width'
      }]
    })
  ]
}
