import { fail, redirect } from '@sveltejs/kit'
import { stripe } from '$lib/server/stripe'

export const actions = {
	checkout: async ({ request, url }) => {
		// you could use `superValidate` instead but it's one field or
		// get `priceId` over the URL with `?/checkout?priceId=price_1234`
		const data = await request.formData()
		const priceId = String(data.get('priceId'))

		if (!priceId || typeof priceId !== 'string') {
			return fail(400, { error: '`priceId` is required' })
		}

		// this is going to trigger the `/stripe/webhook` endpoint
		const session = await stripe.checkout.sessions.create({
			mode: 'subscription',
			line_items: [
				{
					price: priceId,
					quantity: 1,
				},
			],
			success_url: `${url.origin}/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${url.origin}/stripe/cancel`,
		})

		throw redirect(303, session.url ?? '/')
	},
}
