<script lang="ts">
	let { link, src, body, title } = $props();
</script>

<a href={link}>
	<div
		class="grid h-36 w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-black hover:bg-blue-300 hover:bg-opacity-5 hover:text-blue-400 dark:text-blue-200"
	>
		<div class="col-span-1 pr-4">
			<img {src} class="h-full w-full rounded-md object-cover" alt="" />
		</div>
		<div class="col-span-3">
			<h1 class="text-xl font-bold">{title}</h1>
			<h2 class="text-base text-gray-800 opacity-75 hover:text-blue-200 dark:text-blue-200">
				{body}
			</h2>
		</div>
	</div>
</a>
