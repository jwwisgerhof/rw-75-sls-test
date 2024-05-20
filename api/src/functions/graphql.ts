import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { authDecoder, getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  extraPlugins: [],
  loggerConfig: { logger, options: {} },
  authDecoder,
  directives,
  sdls,
  cors: {
    origin: [
      'https://test.rdm.uq.edu.au',
    ],
    credentials: true,
  },
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
  getCurrentUser,
})
