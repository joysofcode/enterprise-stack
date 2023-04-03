<script lang="ts">
	import Heading from './heading.svelte'

	import '@skeletonlabs/skeleton/themes/theme-crimson.css'
	import '@skeletonlabs/skeleton/styles/all.css'
	import '../app.postcss'
</script>

<svelte:head>
	<title>Enterprise</title>
	<link rel="icon" href="https://fav.farm/🔥" />
</svelte:head>

<Heading />

<slot />
