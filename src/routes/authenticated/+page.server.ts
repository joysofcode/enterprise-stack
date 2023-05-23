import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
	const { user } = await locals.auth.validateUser()
	if (!user) throw redirect(302, '/login')
	return { user }
}
