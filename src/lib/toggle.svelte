<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// The following code is from Github User CaptainCodeman

	// indicate if we're in dark mode or not
	let dark: boolean;

	onMount(() => {
		// use the existence of the dark class on the html element for the initial value
		dark = document.documentElement.classList.contains('dark');
		if (dark) {
			document.documentElement.classList.add('peer-focus');
		}

		// listen for changes so we auto-adjust based on system settings
		const matcher = window.matchMedia('(prefers-color-scheme: dark)');
		matcher.addEventListener('change', handleChange);
		return () => matcher.removeEventListener('change', handleChange);
	});

	function handleChange({ matches: dark }: MediaQueryListEvent) {
		// only set if we haven't overridden the theme
		if (!localStorage.theme) {
			setMode(dark);
		}
	}

	function toggle() {
		setMode(!dark);
	}

	function setMode(value: boolean) {
		dark = value;

		// update page styling
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		// store the theme as a local override
		localStorage.theme = dark ? 'dark' : 'light';

		// if the toggled-to theme matches the system defined theme, clear the local override
		// this effectively provides a way to override or revert to "automatic" setting mode
		if (window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches) {
			localStorage.removeItem('theme');
		}
	}
	// End of code from Github User CaptainCodeman
</script>

<label class="inline-flex cursor-pointer items-center">
	<!-- To avoid svelte complaining -->
	<input type="checkbox" value="" class="peer sr-only" />
	{#if dark}
		<Icon
			icon="mdi:weather-sunny"
			height={30}
			class="mr-1 text-blue-900 opacity-70 dark:text-blue-200"
			onclick={toggle}
		/>
	{:else}
		<Icon
			icon="mdi:weather-night"
			height={25}
			class="ml-1 text-blue-900 opacity-70 dark:text-blue-200"
			onclick={toggle}
		/>
	{/if}
</label>
