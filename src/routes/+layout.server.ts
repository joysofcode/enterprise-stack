export async function load({ locals }) {
	const { user } = await locals.auth.validateUser()
	return { user }
}
