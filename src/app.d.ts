// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="lucia-auth" />
import type { User } from '@prisma/client'

declare namespace Lucia {
	type Auth = import('$lib/server/auth').Auth
	type UserAttributes = User
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import('@lucia-auth/sveltekit').Validate
			validateUser: import('@lucia-auth/sveltekit').ValidateUser
			setSession: import('@lucia-auth/sveltekit').SetSession
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
