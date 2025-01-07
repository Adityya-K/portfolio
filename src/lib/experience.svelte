<script lang="ts">
	let { year, title, link, children } = $props();
</script>

{#if link === ''}
	<div
		class="grid w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-black dark:text-blue-200"
	>
		<div class="col-span-1">
			<h3 class="pr-2 text-base text-black opacity-75 dark:text-blue-300">{year}</h3>
		</div>
		<div class="col-span-3">
			<h1 class="text-xl font-bold">{title}</h1>
			<div class="text-base text-gray-800 opacity-75 dark:text-blue-200">
				{@render children()}
			</div>
		</div>
	</div>
{:else}
	<a href={link} target="_blank">
		<div
			class="grid w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-black hover:bg-gray-800 hover:bg-opacity-5 hover:text-blue-400 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:bg-opacity-5 dark:hover:text-blue-400"
		>
			<div class="col-span-1">
				<h3 class="pr-2 text-base text-black opacity-75 dark:text-blue-300">{year}</h3>
			</div>
			<div class="col-span-3">
				<h1 class="text-xl font-bold">{title}</h1>
				<div
					class="text-base text-gray-800 opacity-75 hover:text-gray-800 dark:text-blue-200 dark:hover:text-blue-200"
				>
					{@render children()}
				</div>
			</div>
		</div>
	</a>
{/if}
