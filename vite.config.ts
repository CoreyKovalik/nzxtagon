import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

/** @todo Installing types would fix this -- but I want to avoid exposing node types in the majority frontend code.*/
// @ts-expect-error: process.env exists in the context of vite config.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nodeProcess = (process as any);
const isProd = nodeProcess.env === "production";
const repositoryName = "nzxtagon";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: isProd ? `/${repositoryName}/` : undefined, // necessary for gh-pages
})
