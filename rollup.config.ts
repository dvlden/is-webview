import { main, module, typings } from './package.json'
import { defineConfig, RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

// const mod = (name: string) => name.replace(/^@.*\//, '')
const bundle = (config: RollupOptions) => ({
  input: 'src/index.ts',
  external: (id: string) => !/^[./]/.test(id),
  ...config,
})

export default defineConfig([
  bundle({
    output: [
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [esbuild()]
  }),
  bundle({
    output: [
      {
        file: typings,
        format: 'es'
      },
    ],
    plugins: [dts()]
  })
])
