import { auth } from '$lib/server/auth'
import { handleHooks } from '@lucia-auth/sveltekit'

// use `sequence` from SvelteKit to add more hooks
// export const handle = sequence(handleHooks(auth), ...)

export const handle = handleHooks(auth)
