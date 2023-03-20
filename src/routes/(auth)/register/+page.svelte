<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'

	export let data

	const { form, errors, constraints, enhance } = superForm(data.form)
</script>

<div class="card m-auto mt-16 max-w-md p-8">
	<h1>Register</h1>

	<form method="POST" class="mt-8 space-y-8" use:enhance>
		<label class="label" for="username">
			<span class="block">Username</span>
			<input
				class="input"
				type="text"
				name="username"
				id="username"
				class:input-error={$errors.username}
				data-invalid={$errors.username}
				bind:value={$form.username}
				{...$constraints.username}
			/>
		</label>
		{#if $errors.username}
			<span class="text-red-400">{$errors.username}</span>
		{/if}

		<label class="label" for="password">
			<span class="block">Password</span>
			<input
				class="input"
				type="password"
				name="password"
				id="password"
				class:input-error={$errors.password}
				data-invalid={$errors.password}
				bind:value={$form.password}
				{...$constraints.password}
			/>
		</label>
		{#if $errors.password}
			<span class="text-red-400">{$errors.password}</span>
		{/if}

		<button class="btn variant-filled" type="submit">Register</button>
	</form>
</div>
