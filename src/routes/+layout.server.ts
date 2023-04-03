/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
    return locals.auth.validateUser();
}