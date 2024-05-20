import type { QueryResolvers } from 'types/graphql'

/**
 * The following GraphQL endpoints are used by the admin area for performing miscellaneous tasks
 */
export const helloGraphQl: QueryResolvers['helloGraphQl'] = async () => {
  return 'Hello from GraphQL'
}
