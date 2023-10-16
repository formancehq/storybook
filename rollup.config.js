import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import css from 'rollup-plugin-import-css';
import { terser } from 'rollup-plugin-terser';

// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-ts-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      css({ include: ['**/*.css'], output: 'bundle.css' }),
    ],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/lab',
      '@mui/material',
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/icons-material',
      '@mui/lab',
      '@mui/material',
      /\.css$/,
    ],
    plugins: [dts()],
  },
];
