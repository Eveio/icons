import typescript from 'rollup-plugin-typescript'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'

import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [typescript(), vue(), scss()],
  external: ['vue']
}
