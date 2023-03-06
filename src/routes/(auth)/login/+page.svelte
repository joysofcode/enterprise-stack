<script lang="ts">
	import { enhance } from '$app/forms'
</script>

<div>
	<h1>Log in</h1>

	<form method="POST" use:enhance>
		<label for="username">
			Username
			<input id="username" name="username" />
		</label>

		<label for="password">
			Password
			<input type="password" id="password" name="password" />
		</label>

		<button type="submit">Log in</button>
	</form>
</div>
