<script lang="ts">
	let { year, body, title } = $props();
</script>

<div
	class="grid w-full grid-cols-4 rounded-md border-solid px-4 py-4 text-blue-200 hover:bg-blue-300 hover:bg-opacity-5 hover:text-blue-400"
>
	<div class="col-span-1">
		<h3 class="text-base text-blue-300 opacity-75">{year}</h3>
	</div>
	<div class="col-span-3">
		<h1 class="text-xl font-bold">{title}</h1>
		<h2 class="text-base text-blue-200 opacity-75 hover:text-blue-200">{body}</h2>
	</div>
</div>
