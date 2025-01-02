<script lang="ts">
	let { year, body, title, link } = $props();
</script>

<a href={link} target="_blank">
	<div
		class="grid w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-black hover:bg-blue-300 hover:bg-opacity-5 hover:text-blue-400 dark:text-blue-200"
	>
		<div class="col-span-1">
			<h3 class="pr-2 text-base text-black opacity-75 dark:text-blue-300">{year}</h3>
		</div>
		<div class="col-span-3">
			<h1 class="text-xl font-bold">{title}</h1>
			<h2
				class="text-base text-gray-800 opacity-75 hover:text-gray-800 dark:text-blue-200 dark:hover:text-blue-200"
			>
				{body}
			</h2>
		</div>
	</div>
</a>
