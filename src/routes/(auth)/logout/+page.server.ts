import { fail } from '@sveltejs/kit'
import { auth } from '$lib/server/auth'

export const actions = {
	default: async ({ locals }) => {
		const session = await locals.validate()
		if (!session) return fail(401)

		await auth.invalidateSession(session.sessionId) // invalidate session
		locals.setSession(null) // remove cookie
	},
}
