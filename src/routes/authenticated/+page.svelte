<script lang="ts">
	import { page } from '$app/stores'

	$: user = $page.data.user
</script>

<div class="p-4">
	<h1>Profile</h1>
	<p class="mt-4 capitalize">Welcome, {user?.username}!</p>
</div>
