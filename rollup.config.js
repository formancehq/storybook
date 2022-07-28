import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

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
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      terser(),
      peerDepsExternal(),
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
    ],
    plugins: [dts()],
  },
];
