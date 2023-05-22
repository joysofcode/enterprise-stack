import { auth } from '$lib/server/auth'

// use `sequence` from SvelteKit to add more hooks
// export const handle = sequence(handleHooks(auth), ...)

export async function handle({ event, resolve }) {
	event.locals.auth = auth.handleRequest(event)
	return await resolve(event)
}
