<script lang="ts">
	import { page } from '$app/stores'
	import { handleSession } from '@lucia-auth/sveltekit/client'

	import '../app.css'

	handleSession(page)
</script>

<slot />
