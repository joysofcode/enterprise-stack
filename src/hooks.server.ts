import { auth } from '$lib/server/auth'
import type { Handle } from '@sveltejs/kit'

// use `sequence` from SvelteKit to add more hooks
// export const handle = sequence(handleHooks(auth), ...)

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event)
	return await resolve(event)
}
