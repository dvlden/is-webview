import { defineConfig, RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

const { main, module, typings } = await import('./package.json', {
  assert: { type: 'json' },
}).then((m) => m.default)

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
        sourcemap: true,
      },
    ],
    plugins: [esbuild()],
  }),
  bundle({
    output: [
      {
        file: typings,
        format: 'es',
      },
    ],
    plugins: [dts()],
  }),
])
