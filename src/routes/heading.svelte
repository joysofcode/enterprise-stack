<script lang="ts">
	import { enhance } from '$app/forms'
	import { getUser } from '@lucia-auth/sveltekit/client'
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
	import { Flame } from 'lucide-svelte'

	const user = getUser()
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<a class="flex gap-1" href="/">
			<Flame /> Enterprise
		</a>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<a href="/pricing">Pricing</a>
		<a href="/authenticated">Authed</a>
		{#if $user}
			<form method="POST" action="/logout" use:enhance>
				<button type="submit">Sign out</button>
			</form>
		{:else}
			<a href="/login">Log in</a>
			<a href="/register">Register</a>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>
