<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client'

	const user = getUser()
</script>

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {$user?.username}!</p>
</div>
