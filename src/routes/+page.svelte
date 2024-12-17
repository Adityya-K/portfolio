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
	class="fixed left-0 top-0 h-screen w-screen text-white"
	role="region"
	onmousemove={handleMousemove}
></div>
<div
	style="transform:translateX({m.x - circle_size * 0.5}px) translateY({m.y -
		circle_size * 0.5}px); width:{circle_size}px; height:{circle_size}px;"
	class="bg-mouse-radial fixed left-0 top-0 -z-20"
></div>
<div class="fixed left-0 top-0 -z-30 h-screen w-screen bg-[#00172D]"></div>
