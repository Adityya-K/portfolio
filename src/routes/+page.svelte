<script lang="ts">
	import Icon from '@iconify/svelte';
	import Project from '$lib/project.svelte';
	import Experience from '$lib/experience.svelte';
	import image1 from '$lib/test.jpg';
	let m = $state({ x: 0, y: 0 });
	let y = $state(0);
	let width = $state(0);
	let circle_size = $state(1000);
	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />

<div
	style="transform:translateX({m.x - circle_size * 0.5}px) translateY({m.y -
		circle_size * 0.5}px); width:{circle_size}px; height:{circle_size}px;"
	class="fixed left-0 top-0 -z-20 bg-mouse-radial opacity-50"
></div>
<div class="fixed left-0 top-0 -z-30 h-screen w-screen bg-[#00172D]"></div>

<div class="flex w-screen justify-center" onmousemove={handleMousemove} role="region">
	<div class="grid w-full max-w-[1200px] pt-32 lg:grid-cols-7">
		<div
			class="w-full self-start px-4 pr-16 text-blue-100 lg:sticky lg:top-32 lg:col-span-3 xl:px-0"
		>
			<h1 class="text-5xl font-bold">Adityya Kaushal</h1>
			<h2 class="pt-4 text-2xl">
				Mechatronics Undergraduate Student at the University of Waterloo
			</h2>
			<h3 class="pr-32 pt-5 text-lg opacity-75">
				I like to explore the intersection of software and hardware!
			</h3>
			{#if width > 1024}
				<div class="py-10">
					<ul>
						<a href="#top">
							<li class={y < 1 ? 'text-xl font-extrabold transition-all' : 'transition-all'}>
								&mdash;&mdash;&mdash; About Me
							</li>
						</a>
						<a href="#schooling">
							<li
								class={y >= 1 && y < 400
									? 'text-xl font-extrabold transition-all'
									: 'transition-all'}
							>
								&mdash;&mdash;&mdash; School and Work Experience
							</li>
						</a>
						<a href="#clubs">
							<li
								class={y >= 400 && y < 700
									? 'text-xl font-extrabold transition-all'
									: 'transition-all'}
							>
								&mdash;&mdash;&mdash; Clubs and Extracirriculars
							</li>
						</a>
						<a href="#projects">
							<li class={y >= 700 ? 'text-xl font-extrabold transition-all' : 'transition-all'}>
								&mdash;&mdash;&mdash; Projects
							</li>
						</a>
					</ul>
				</div>
			{:else}
				<div class="fixed left-0 top-0 z-30 flex w-full bg-[#00172D]">
					<ul class="flex w-full justify-between p-4 text-center">
						<a href="#top">
							<li class={y < 1 ? 'font-extrabold transition-all' : 'transition-all'}>About Me</li>
						</a>
						<a href="#schooling-mobile">
							<li class={y >= 1 && y < 400 ? 'font-extrabold transition-all' : 'transition-all'}>
								School and Work Experience
							</li>
						</a>
						<a href="#clubs-mobile">
							<li class={y >= 400 && y < 700 ? 'font-extrabold transition-all' : 'transition-all'}>
								Clubs and Extracirriculars
							</li>
						</a>
						<a href="#projects">
							<li class={y >= 700 ? 'font-extrabold transition-all' : 'transition-all'}>
								Projects
							</li>
						</a>
					</ul>
				</div>
			{/if}
			<div class="flex py-4 lg:py-0">
				<div class="pr-5">
					<a href="https://www.linkedin.com/in/adityya-kaushal-183253310/">
						<Icon icon="mdi:linkedin" height={35} />
					</a>
				</div>
				<a href="https://github.com/Adityya-K/">
					<Icon icon="mdi:github" height={35} />
				</a>
			</div>
		</div>
		<div class="w-full lg:col-span-4">
			<div class="px-4 pb-4 pt-4 text-lg leading-loose text-blue-200 opacity-50 lg:pt-0" id="about">
				<p>
					I am a university undergraduate student about the intersection between software and
					hardware, particularily in the field of <b class="text-blue-50 opacity-100">robotics</b>.
					It is my hope that I can augment great software like artificial intelligence with great
					hardware like robots.
				</p>
				<p class="pt-3">
					I am a university undergraduate student about the intersection between software and
					hardware, particularily in the field of <b class="text-blue-50 opacity-100">robotics</b>.
					It is my hope that I can augment great software like artificial intelligence with great
					hardware like robots.
				</p>
			</div>
			<div class="absolute top-[350px]" id="schooling-mobile"></div>
			<div class="py-4" id="schooling">
				<hr class="h-px border-blue-200 opacity-50" />
			</div>
			<Experience
				title="University of Waterloo | Mechatronics Engineering"
				body="Currently pursuing an undergraduate degree Mechatronics Engineering"
				year="2024-Current"
				link="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
			/>
			<Experience
				title="EQUEST | Technical Lead and Teacher"
				body="Technical Lead and Teacher at a tutoring business, Equest."
				year="2020-Current"
				link="https://www.equest.ca/"
			/>
			<Experience
				title="Turner Fenton Secondary School"
				body="Graduated with the International Baccalaureate Diploma"
				year="2020-2024"
				link="https://turnerfenton.peelschools.org/ib"
			/>
			<div class="absolute top-[650px]" id="clubs-mobile"></div>
			<div class="py-4" id="clubs">
				<hr class="h-px border-blue-200 opacity-50" />
			</div>
			<Experience
				title="Midnight Sun | Firmware Developer"
				body="A firmware developer for midnight sun"
				year="2024-Current"
				link="https://turnerfenton.peelschools.org/ib"
			/>
			<Experience
				title="WARG | Autonomy Developer"
				body="A autonomy developer for the waterloo ariel robotics group"
				year="2020-2024"
				link="https://turnerfenton.peelschools.org/ib"
			/>
			<Experience
				title="Turner Hacks | Co-Director"
				body="One of the directors for Turner Hacks"
				year="2023-2024"
				link="https://turnerfenton.peelschools.org/ib"
			/>
			<Experience
				title="Math and Computing | Vice President"
				body="Vice President of Math and Computing at Turner Fenton"
				year="2023-2024"
				link="https://turnerfenton.peelschools.org/ib"
			/>
			<div class="py-4" id="projects">
				<hr class="h-px border-blue-200 opacity-50" />
			</div>
			<Project
				link="https://github.com/Adityya-K/LudusUltimateTicTacToe"
				src={image1}
				title="Ultimate Tic Tac Toe | Java"
				body="Creating a Ultimate Tic Tac Toe Board in Java Script and a simple game AI with the minimax algorithm"
			/>
			<Project
				link="https://github.com/SoarConferenceCA/soarwebsite2024"
				src={image1}
				title="SOAR Conference Site | NextJS"
				body="Creating a website for the SOAR Conference using NextJS"
			/>
			<Project
				link="https://github.com/Adityya-K/portfolio"
				src={image1}
				title="Portfolio Site | SvelteKit"
				body="This website which is made in SvelteKit!"
			/>
			<div class="py-4">
				<hr class="h-px border-blue-200 opacity-50" />
			</div>
		</div>
	</div>
</div>
