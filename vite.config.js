/// <reference types="vitest" />
import { sveltekit } from '@sveltejs/kit/vite';

/** @type import('vite').UserConfig */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ['src/tests/unit/**/*.test.ts'],
  },
};

export default config;
