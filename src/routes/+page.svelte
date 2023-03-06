<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'

	const user = getUser()
</script>

<h1>Profile</h1>

<div>
	<p>User id: {$user?.userId}</p>
	<p>Username: {$user?.username}</p>
</div>

<form method="POST" use:enhance>
	<button type="submit">Sign out</button>
</form>
