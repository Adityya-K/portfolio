<script lang="ts">
	import Icon from '@iconify/svelte';
	import Project from '$lib/project.svelte';
	import Experience from '$lib/experience.svelte';
	import tic_tac_toe from '$lib/tic_tac_toe.png';
	import soar from '$lib/soar.png';
	import green_days from '$lib/green_days.png';
	import portfolio_icon from '$lib/portfolio-icon.png';
	import robot from '$lib/robot.png';
	import { inview, type Options } from 'svelte-inview';
	import Toggle from '$lib/toggle.svelte';
	let m = $state({ x: 0, y: 0 });
	let y = $state(0);
	let width = $state(0);
	let section = $state(0);
	let circle_size = $state(1000);
	function handleMousemove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
	const options: Options = {
		rootMargin: '-25%',
		threshold: 0.1
	};
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<script>
		if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<svelte:window bind:scrollY={y} bind:innerWidth={width} />

<div class="absolute right-4 top-4">
	<Toggle />
</div>

<div
	style="transform:translateX({m.x - circle_size * 0.5}px) translateY({m.y -
		circle_size * 0.5}px); width:{circle_size}px; height:{circle_size}px;"
	class="fixed left-0 top-0 -z-20 bg-mouse-radial opacity-50 dark:bg-mouse-radial-dark"
></div>
<div class="fixed left-0 top-0 -z-30 h-screen w-screen bg-white dark:bg-[#00172D]"></div>

<div class="flex w-screen justify-center" onmousemove={handleMousemove} role="region">
	<div class="grid w-full max-w-[1200px] pt-7 lg:grid-cols-7 lg:pt-[17vh]">
		<div
			class="w-full self-start px-4 pr-16 text-black dark:text-blue-100 lg:sticky lg:top-[17vh] lg:col-span-3 xl:px-0"
		>
			<h1 class="text-5xl font-bold">Adityya Kaushal</h1>
			<h2 class="pt-4 text-2xl">
				Mechatronics Undergraduate Student at the University of Waterloo
			</h2>
			<h3 class="pr-32 pt-2 text-lg opacity-75">
				<b class="text-xl">&rarr;</b> Currently pursuing <b>Term 1B</b>
			</h3>
			<h3 class="pr-32 pt-5 text-lg opacity-75">
				I like to explore the intersection of software and hardware!
			</h3>
			{#if width > 1024}
				<div class="py-10">
					<ul>
						<a href="#top">
							<li class={y < 1 ? 'py-2 text-xl font-extrabold transition-all' : 'transition-all'}>
								&mdash;&mdash;&mdash; About Me
							</li>
						</a>
						<a href="#schooling" onclick={() => (section = 1)}>
							<li
								class={section == 1 && y >= 1
									? 'py-2 text-xl font-extrabold transition-all'
									: 'transition-all'}
							>
								&mdash;&mdash;&mdash; School and Work Experience
							</li>
						</a>
						<a href="#clubs" onclick={() => (section = 2)}>
							<li
								class={section == 2 && y >= 1
									? 'py-2 text-xl font-extrabold transition-all'
									: 'transition-all'}
							>
								&mdash;&mdash;&mdash; Clubs and Extracirriculars
							</li>
						</a>
						<a href="#projects" onclick={() => (section = 3)}>
							<li
								class={section == 3 && y >= 1
									? 'py-2 text-xl font-extrabold transition-all'
									: 'transition-all'}
							>
								&mdash;&mdash;&mdash; Projects
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
				<div class="pr-5">
					<a href="https://github.com/Adityya-K/">
						<Icon icon="mdi:github" height={35} />
					</a>
				</div>
				<a href="mailto:adityya.kaushal@uwaterloo.ca">
					<Icon icon="mdi:email-outline" height={35} />
				</a>
			</div>
		</div>
		<div class="w-full lg:col-span-4">
			<div
				class="px-4 pb-4 pt-4 text-lg leading-loose text-gray-800 dark:text-blue-200 dark:opacity-75 lg:pt-0"
				id="about"
			>
				<p>
					I am a university undergraduate student interested in various fields of <b
						class="opacity-100">software</b
					>
					and <b class="opacity-100">mechanical</b> engineering. I hope to accumulate experience in
					both areas to explore the
					<b class="opacity-100">intersection between hardware and software</b>.
				</p>
				<p class="pt-3">My areas of interest as well as my progress in each are...</p>
				<ul class="list-disc px-4">
					<li><b>Frontend Web-Dev</b> (Currently Learning SvelteKit and NextJS)</li>
					<li><b>Low level programming</b> (Currently Learning Firmware Development in C)</li>
					<li id="schooling">
						<b>AI and ML</b> (Starting to Learn about Deep Neural Networks as well as Learning Computer
						Vision modelling for drone flight)
					</li>
					<li>
						<b>Mechanical Systems</b> (Learned Solid Works and AutoCAD at the University of Waterloo
						during Term 1A)
					</li>
					<li>
						<b>Robotics</b> (Have built multiple robotic systems throughout highschool and university)
					</li>
				</ul>
			</div>
			<div
				use:inview={options}
				oninview_change={(event) => {
					if (event.detail.inView) section = 1;
				}}
			>
				<div class="py-4">
					<hr class="h-px border-gray-900 opacity-50 dark:border-blue-200" />
				</div>
				<Experience
					title="University of Waterloo | Mechatronics Engineering"
					year="2024-Current"
					link="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
					>Currently pursuing a Bachelors of Applied Science in Mechatronics Engineering"</Experience
				>
				<div id="clubs"></div>
				<Experience
					title="EQUEST | Technical Lead and Teacher"
					year="2020-Current"
					link="https://www.equest.ca/"
					>Helped with the business' transition online during the pandemic. Additionally, I am
					responsible for teaching middle and high school students the basics of coding and STEM
					subjects</Experience
				>
				<Experience
					title="Turner Fenton Secondary School"
					year="2020-2024"
					link="https://turnerfenton.peelschools.org/ib"
					>Graduated with the International Baccalaureate Diploma and Ontario Secondary School
					Diploma</Experience
				>
			</div>
			<div
				use:inview={options}
				oninview_change={(event) => {
					if (event.detail.inView) section = 2;
				}}
			>
				<div class="py-4">
					<hr class="h-px border-gray-900 opacity-50 dark:border-blue-200" />
				</div>
				<Experience
					title="Midnight Sun | Firmware Developer"
					year="2024-Current"
					link="https://github.com/uw-midsun/fwxv/tree/watchdog"
				>
					<p>
						Midnight Sun is a student design team that designs <b>solar-powered cars</b>! As a new
						firmware developer, I learn the basics of
						<b> Firmware Development and Embedded systems programming </b>
						by coding in <b>C</b> and using <b>STM32 boards.</b>
					</p>
					<p class="pt-2">
						My current contribution was coding an independent watchdog timer using the STM32F10x
						Peripheral Drivers. I am in the process of testing my code so it can be merged into the
						main branch of the codebase!
					</p>
				</Experience>
				<Experience
					title="WARG | Autonomy Developer"
					year="2024-Current"
					link="https://turnerfenton.peelschools.org/ib"
					><p>
						WARG is an <b>aerial robotics</b> student design team that designs autonomous drones!
						Being on the Autonomy team is allowing me to learn about various
						<b> autonomous systems while enforcing software engineering principles </b>
						such as <b>object oriented programming.</b> My tasks usually deal with coding in
						<b>Python</b> and understanding the basics of the codebase.
					</p>
					<p class="pt-2">
						Currently, I am rewriting a function that is responsible for restarting process workers
						in a
						<b>FIFO queue</b> while validating and preserving the data that each worker holds.
					</p></Experience
				>
				<Experience
					title="Turner Hacks | Co-Director"
					year="2023-2024"
					link="https://www.instagram.com/turnerhacks/"
				>
					<p>
						With clear <b>communication</b> and collaborative <b>leadership</b>, I led a team of 10
						executive members to organize a hackathon at <b>Sheridan College</b>, sponsored by
						<b
							>Peel District School Board, Make Stuff Move, Youth Culture, Brampton Innovation
							District, Sheridan College and Zebra Robotics</b
						>.
					</p>
					<p class="pt-2">
						The hackathon had a turnout of <b>over 50 students</b> who, along with our corporate partners,
						had positive reviews!
					</p>
				</Experience>
				<Experience
					title="Math and Computing | Vice President and Co-Founder"
					year="2023-2024"
					link="https://www.instagram.com/tfssmcc/"
					>Math and Computing is a club that I co-founded to prepare students for Waterloo Math and
					Computing competitions. The club taught me valuable <b
						>presentation and organizational skills</b
					> that I use in my day-to-day as a university student to communicate and act on various ideas.</Experience
				>
				<Experience
					title="Hack The Valley 8 | Top 20"
					year="2023"
					link="https://devpost.com/software/green-days-301w6t"
				>
					<p>
						Hack the Valley is the hackathon hosted by the University of Toronto's Scarborough
						Campus. The hackathon allowed me to kickstart my<b>SvelteKit</b> learning journey by
						building an app with a simple frontend, integrating UI frameworks like
						<b>Skeleton UI</b>, working with <b>Open Meteo Weather API</b> and
						<b>JSON</b>.
					</p>
					<p class="pt-2">
						As it was my partner and I's first time participating in a hackathon, we were proud to
						recieve <b>Top 20</b>.
					</p>
				</Experience>
				<Experience
					title="Interact Rotary Club | President"
					year="2022-2024"
					link="https://turnerfenton.peelschools.org/ib"
					>Interact is a charitable school club affiliated with Rotary International. As president I
					learned to manage a team of executive and create local community events that helped raise <b
						>$500+</b
					> for charitable causes.</Experience
				>
				<Experience
					title="Relay For Life | Tech Captain"
					year="2022-2024"
					link="https://www.instagram.com/p/CePuW5sri4Z/"
					>Relay for life is school club affliated with the Canadian Cancer Society. As Tech Captain
					I created videos in <b>DaVinci Resolve</b> to promote Relay for Life events that helped raise
					funds for the Cancer Reasearch</Experience
				>
				<Experience
					title="McMaster Start Coding (Now STaBL Foundation) | Junior Mentor and Junior Developer"
					year="2018-2019"
					link=""
					>McMaster Start Coding is a student-led initiative that aims to teach students around the
					world about coding using a programming language called <b>Elm</b>. As a <b>developer</b> I
					helped develop a <b>graphical interface</b> in <b>Elm</b> for McMaster Start Coding's Code
					like Beethovan Camp which explored the intersection of music and code. As a
					<b>junior mentor</b>, I helped students learn the fundementals of coding through Elm.</Experience
				>
			</div>
			<div
				use:inview={options}
				oninview_change={(event) => {
					if (event.detail.inView) section = 3;
				}}
			>
				<div class="py-4">
					<hr class="h-px border-gray-900 opacity-50 dark:border-blue-200" />
				</div>
				<Project
					link="https://github.com/Adityya-K/portfolio"
					src={portfolio_icon}
					title="Portfolio Site"
					tools="SvelteKit 5.0, TailwindCSS"
					>The site you are seeing right now which is implemented using <b>SvelteKit</b> and
					deployed on <b>Vercel</b>!</Project
				>
				<Project
					link="https://drive.google.com/drive/folders/1uxgCvnGchgtoQBvpl_lhSSkPfS44gjUW?usp=sharing"
					src={robot}
					title="Distrobot"
					tools="LEGO EV3, RobotC, SolidWorks"
					>A <b>LEGO EV3</b> robot that could collect, sort and drop off packages by color to
					specific destination marked by lines. The RobotC code for the robot implmented a
					<b>PID line-follow algorithm</b> and a <b>finite state machine</b>. The colored packages
					were designed in <b>SolidWorks</b> and then <b>3D-printed</b> using different colors of filaments.
				</Project>
				<Project
					link="https://github.com/Adityya-K/soar_website_2024"
					src={soar}
					title="SOAR Conference Site"
					tools="NextJS, TailwindCSS"
					>Soar is a conference that aims to bridge the gap between middle and high school. As a web
					developer, I created a simple, yet elegant, <b>responsive user-interface</b> in
					<b>NextJS</b> to help advertise the conference. The website is deployed on
					<b>Vercel</b>.</Project
				>
				<Project
					link="https://github.com/Adityya-K/green-days"
					src={green_days}
					title="Green Days"
					tools="SvelteKit 4.0, TailwindCSS, Skeleton UI"
					>Hackathon project mentioned in the Hack the Valley Extracurricular. The site was made
					using <b>SvelteKit</b>
					as the meta-framework. Javascript's await/async API was used to source weather information
					from the <b>Open Meteo Weather API</b>.</Project
				>
				<Project
					link="https://github.com/Adityya-K/LudusUltimateTicTacToe"
					src={tic_tac_toe}
					title="Ultimate Tic Tac Toe"
					tools="Java, Java Swing, Apache Ant"
				>
					<p>
						Created an tic-tac-toe mini-game with normal and ultimate tic-tac-toe implementations.
						The users can choose between three levels of AI for each. Local storage for past games
						was implemented by writing to a local file. <b>Swing</b> was used to create a user-friendly
						and appealing UI.
					</p>
					<p class="pt-2">
						The normal tic-tac-toe computer player has an implemnetation of the <b
							>minimax algorithm</b
						> which creates a tree of all possible moves and chooses the best one!
					</p>
				</Project>
			</div>
			<div class="py-4">
				<hr class="h-px border-gray-900 opacity-50 dark:border-blue-200" />
			</div>
			<div id="projects"></div>
		</div>
	</div>
</div>
