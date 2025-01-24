import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  clean: true,
  dts: true,
  bundle: true,
  minify: true,
  skipNodeModulesBundle: true,
  target: 'es2020',
  outDir: 'dist',
  treeshake: true,
});
