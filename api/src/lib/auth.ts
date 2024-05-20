
import { AuthenticationError, ForbiddenError } from '@redwoodjs/graphql-server'



export const authDecoder = async (token: string, type: string) => {
  if (type !== 'custom-auth') {
    return null
  }
  return 'Sure'
}

export type RedwoodUser = {
  id: number
  displayName: string
  mail: string
  roles: string[]
}

export const getCurrentUser = async (decoded: { sessionId: number } | null): Promise<RedwoodUser | null> => {
  if (!decoded) {
    return null
  }

  return {id: 1, displayName: 'Test User', mail: 'test@test.com', roles: []}
}

export const isAuthenticated = (): boolean => {
  if (!context.currentUser) return false

  return !!context.currentUser
}

export const hasRole = (role: string) => {
  if (!isAuthenticated()) {
    return false
  }

  if (role === '') {
    return true
  }

  const userRoles = context.currentUser.roles as string[]

  return userRoles.includes(role)
}

export const requireAuth = (roles: string[] = []) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  roles.forEach((role) => {
    if (!hasRole(role)) {
      throw new ForbiddenError('You do not have access to this resource.')
    }
  })
}

export const requireAnyRole = (roles: string[] = []) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.")
  }

  const hasARole = roles.some((role) => hasRole(role))

  if (!hasARole || !hasRole('uq')) {
    throw new ForbiddenError('You do not have access to this resource.')
  }
}
