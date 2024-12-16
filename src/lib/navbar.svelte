<script lang="ts">
	let windowWidth = $state(0);
</script>

<svelte:window bind:innerWidth={windowWidth} />

<nav class="flex justify-between px-5">
	{#if windowWidth > 900}
		<h1 class="w-[150px]">Logo</h1>
		<ul class="flex w-[250px]">
			<li class="pr-5">Item 1</li>
			<li class="pl-5 pr-5">Item 2</li>
			<li class="pl-5">Item 3</li>
		</ul>
		<h1 class="flex w-[150px] justify-end">CV/Resume</h1>
	{:else}
		<h1>Logo</h1>
		<h1>Dropdown</h1>
	{/if}
</nav>
