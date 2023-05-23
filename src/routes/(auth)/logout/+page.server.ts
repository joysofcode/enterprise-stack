import { fail } from '@sveltejs/kit'
import { auth } from '$lib/server/auth'

export const actions = {
	async default({ locals }) {
		const { session } = await locals.auth.validateUser()
		if (!session) return fail(401)

		await auth.invalidateSession(session.sessionId) // invalidate session
		locals.auth.setSession(null) // remove cookie
	},
}
