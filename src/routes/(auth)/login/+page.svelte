<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<div class="m-auto mt-16 max-w-sm">
	<h1>Log in</h1>

	<form class="mt-8 space-y-4" method="POST" use:enhance>
		<label class="label" for="username">
			<span>Username</span>
			<input class="input" type="text" id="username" name="username" />
		</label>

		<label class="label" for="password">
			<span>Password</span>
			<input class="input" type="password" id="password" name="password" />
		</label>

		<button class="btn variant-filled mt-4" type="submit">Log in</button>
	</form>
</div>
