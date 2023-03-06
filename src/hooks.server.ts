import { auth } from '$lib/server/auth'
import { handleHooks } from '@lucia-auth/sveltekit'

// you can add more hooks here
export const handle = handleHooks(auth)
