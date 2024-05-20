import dns from 'dns'

import { defineConfig, UserConfig } from 'vite'

// See: https://vitejs.dev/config/server-options.html#server-host
// So that Vite will load on local instead of 127.0.0.1
dns.setDefaultResultOrder('verbatim')

import redwood from '@redwoodjs/vite'

const path = require('path')

const { getPaths } = require('@redwoodjs/internal')

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
const viteConfig: UserConfig = {
  build: {
    sourcemap: true,
  },
  plugins: [redwood()],
  resolve: {
    alias: {
      '.prisma/client/index-browser': '../node_modules/.prisma/client/index-browser.js',
    },
  },
}

export default defineConfig(viteConfig)
