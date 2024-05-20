import gql from 'graphql-tag'

import { createValidatorDirective, ValidatorDirectiveFunc } from '@redwoodjs/graphql-server'

import { requireAnyRole as applicationRequireAnyRole } from 'src/lib/auth'

export const schema = gql`
  directive @requireAnyRole(roles: [String]) on FIELD_DEFINITION
`

type RequireAnyRoleValidate = ValidatorDirectiveFunc<{ roles?: string[] }>

const validate: RequireAnyRoleValidate = ({ directiveArgs }) => {
  applicationRequireAnyRole(directiveArgs.roles)
}

const requireAnyRole = createValidatorDirective(schema, validate)

export default requireAnyRole
