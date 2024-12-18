<script lang="ts">
	import Project from '$lib/project.svelte';
	let m = $state({ x: 0, y: 0 });
	let circle_size = $state(1000);
	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div
	style="transform:translateX({m.x - circle_size * 0.5}px) translateY({m.y -
		circle_size * 0.5}px); width:{circle_size}px; height:{circle_size}px;"
	class="fixed left-0 top-0 -z-20 bg-mouse-radial opacity-50"
></div>
<div class="fixed left-0 top-0 -z-30 h-screen w-screen bg-[#00172D]"></div>

<div class="flex w-screen justify-center" onmousemove={handleMousemove} role="region">
	<div class="grid w-full max-w-[1200px] pt-32 lg:grid-cols-2">
		<div class="sticky top-32 w-full self-start pr-16 text-blue-100">
			<h1 class="text-5xl font-bold">Adityya Kaushal</h1>
			<h2 class="pt-4 text-2xl">
				Mechatronics Undergraduate Student at the University of Waterloo
			</h2>
			<h3 class="pr-64 pt-5 text-lg opacity-75">
				I like to explore the intersection of software and hardware!
			</h3>
		</div>
		<div class="w-full">
			<p class="text-lg leading-loose text-blue-200 opacity-75">
				I am a university undergraduate student about the intersection between software and
				hardware, particularily in the field of <b class="text-blue-50 opacity-100">robotics</b>. It
				is my hope that I can augment great software like artificial intelligence with great
				hardware like robots.
			</p>
			<p class="pt-4 text-lg leading-loose text-blue-200 opacity-75">
				I am a university undergraduate student about the intersection between software and
				hardware, particularily in the field of <b class="text-blue-50 opacity-100">robotics</b>. It
				is my hope that I can augment great software like artificial intelligence with great
				hardware like robots.
			</p>
			<Project />
			<Project />
		</div>
	</div>
</div>
