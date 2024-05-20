import gql from 'graphql-tag'

import { createValidatorDirective, ValidatorDirectiveFunc } from '@redwoodjs/graphql-server'

import { requireAuth as applicationRequireAuth } from 'src/lib/auth'

export const schema = gql`
  directive @requireAuth(roles: [String]) on FIELD_DEFINITION
`

type RequireAuthValidate = ValidatorDirectiveFunc<{ roles?: string[] }>

const validate: RequireAuthValidate = ({ directiveArgs }) => {
  applicationRequireAuth(directiveArgs.roles)
}

const requireAuth = createValidatorDirective(schema, validate)

export default requireAuth
