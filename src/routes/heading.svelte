<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'

	const user = getUser()
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a href="/">Your Enterprise</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		{#if $user}
			<form method="POST" use:enhance>
				<button type="submit">Sign out</button>
			</form>
		{:else}
			<a href="/login">Log in</a>
			<a href="/register">Register</a>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>
