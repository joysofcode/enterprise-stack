<script lang="ts">
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<b>Your Enterprise</b>
	</svelte:fragment>

	<svelte:fragment slot="trail">
		<a href="/register">Register</a>
		<a href="/login">Log in</a>
		<LightSwitch />
	</svelte:fragment>
</AppBar>
