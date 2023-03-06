import { handleServerSession } from '@lucia-auth/sveltekit'

// you can use your own `load` function if you pass it as an argument
// https://lucia-auth.com/sveltekit/start-here/getting-started
export const load = handleServerSession()
