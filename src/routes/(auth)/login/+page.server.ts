import { fail, redirect } from '@sveltejs/kit'
import { auth } from '$lib/server/auth'

// if the user exists, redirect authenticated users to the profile page
export const load = async ({ locals }) => {
	const session = await locals.validate()
	if (session) throw redirect(302, '/')
}

export const actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData()
		const username = form.get('username')
		const password = form.get('password')

		// check for empty values
		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400)
		}

		try {
			const key = await auth.useKey('username', username, password)
			const session = await auth.createSession(key.userId)
			locals.setSession(session)
		} catch {
			// invalid credentials
			return fail(400)
		}
	},
}
