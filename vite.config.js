import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { externals } from 'shared-base';
import p from './package.json';

export default defineConfig({
    plugins: [dts({})],
    build: {
        sourcemap: true,
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'TestingBase',
            formats: ['es', 'umd'],
            fileName: (format) => `testing-base.${format}.js`,
        },
        rollupOptions: {
            ...externals(p.dependencies),
        },
    },
});
