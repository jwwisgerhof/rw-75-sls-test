export const schema = gql`
  type Query {
    helloGraphQl: String! @skipAuth
  }
`
