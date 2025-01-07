<script lang="ts">
	let { link, src, children, title } = $props();
</script>

<a href={link} target="_blank">
	<div
		class="grid w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-black hover:bg-gray-800 hover:bg-opacity-5 hover:text-blue-400 dark:text-blue-200 dark:hover:bg-blue-300 dark:hover:bg-opacity-5 dark:hover:text-blue-400"
	>
		<div class="col-span-1 max-h-full self-center pr-4 align-middle">
			<div
				class="flex h-full max-h-32 w-full justify-center overflow-hidden rounded-md border-2 border-solid border-blue-900 object-center dark:border-blue-300"
			>
				<img {src} class="w-full object-cover" alt="" />
			</div>
		</div>
		<div class="col-span-3">
			<h1 class="text-xl font-bold">{title}</h1>
			<h2
				class="text-base text-gray-800 opacity-75 hover:text-gray-800 dark:text-blue-200 dark:hover:text-blue-200"
			>
				{@render children()}
			</h2>
		</div>
	</div>
</a>
