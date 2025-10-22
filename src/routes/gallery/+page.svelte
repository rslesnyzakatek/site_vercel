<script lang="ts">
	import { ArrowLeft, ArrowRight, X } from '@lucide/svelte';

	const images = [
		{ src: '/gallery/zdj (1).webp', alt: 'Elegancki pokój 2-osobowy', category: 'Budynek' },
		{
			src: '/gallery/zdj (2).webp',
			alt: 'Pokój 2-osobowy z dostępem do ogrodu',
			category: 'Pokoje'
		},
		{ src: '/gallery/zdj (3).webp', alt: 'Przestronny pokój 2-osobowy', category: 'Pokoje' },
		{ src: '/gallery/zdj (4).webp', alt: 'Komfortowe wyposażenie', category: 'Pokoje' },
		{ src: '/gallery/zdj (5).webp', alt: 'Komfortowe wyposażenie', category: 'Pokoje' },
		{ src: '/gallery/zdj (7).webp', alt: 'Przestronny pokój 2-osobowy', category: 'Pokoje' },
		{ src: '/gallery/zdj (8).webp', alt: 'Łazienka dostosowana', category: 'Łazienki' },
		{ src: '/gallery/zdj (9).webp', alt: 'Komfortowe wyposażenie', category: 'Pokoje' },
		{ src: '/gallery/zdj (10).webp', alt: 'Sala dzienna', category: 'Sale dzienne' },
		{ src: '/gallery/zdj (11).webp', alt: 'Sala dzienna', category: 'Sale dzienne' },
		{ src: '/gallery/zdj (6).webp', alt: 'Duża sala dzienna', category: 'Sale dzienne' },
		{ src: '/gallery/zdj (12).webp', alt: 'Duża sala dzienna', category: 'Sale dzienne' },
		{ src: '/gallery/zdj (13).webp', alt: 'Duża sala dzienna', category: 'Sale dzienne' },
		{ src: '/gallery/zdj (14).webp', alt: 'Duża sala dzienna', category: 'Sale dzienne' }
	];

	let img = false;
	let imgSrc = '';
	let currentIndex = 0;

	const showimg = (src: string, index: number) => {
		imgSrc = src;
		currentIndex = index;
		img = true;
	};

	const closeImage = () => {
		img = false;
	};

	const changeImage = (direction: 'next' | 'prev') => {
		if (direction === 'next') {
			currentIndex = (currentIndex + 1) % images.length;
		} else if (direction === 'prev') {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
		}
		imgSrc = images[currentIndex].src;
	};
</script>

<svelte:head>
	<title>Rezydencja Seniora Leśny Zakątek | Dom Opieki w Nowogardzie - Galeria</title>
	<meta
		name="description"
		content="Zobacz naszą galerię zdjęć przedstawiającą komfortowe pokoje, nowoczesne wyposażenie i piękne otoczenie Rezydencji Seniora Leśny Zakątek w Nowogardzie."
	/>
</svelte:head>

<div class="min-h-screen">
	<section class="bg-gradient-to-b from-warm-green-subtle to-background pt-32 pb-16">
		<div class="container mx-auto px-4">
			<div class="mx-auto max-w-3xl text-center">
				<h1 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Galeria</h1>
				<p class="text-lg text-muted-foreground">
					Zapraszamy do obejrzenia naszego ośrodka. <br />
					Zobacz komfortowe pokoje, nowoczesne wyposażenie i piękne otoczenie.
				</p>
			</div>
		</div>
	</section>

	<section class="py-16">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				{#each images as image, index}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<div
						class="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl bg-muted"
						on:click={() => showimg(image.src, index)}
					>
						<img
							src={image.src}
							alt={image.alt}
							title={image.alt}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

{#if img}
	<div class="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4">
		<div class="relative max-h-full max-w-full overflow-auto rounded-lg bg-black shadow-lg">
			<button
				class="absolute top-4 right-4 z-40 cursor-pointer rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200"
				on:click={closeImage}
			>
				<X class="h-6 w-6" />
			</button>
			<div class="flex items-center justify-center bg-black">
				<img
					src={imgSrc}
					alt="Powiększony obrazek"
					title="Powiększony obrazek"
					class="modal-image max-h-[70vh] max-w-[70vw] object-contain"
				/>
			</div>
			<div class="absolute top-0 left-0 z-30 flex h-full w-full items-center">
				<div class="flex w-full flex-row items-center justify-between px-2">
					<button on:click={() => changeImage('prev')}>
						<ArrowLeft
							class="h-8 w-8 cursor-pointer rounded-full border-2 border-green-800 bg-white p-1 text-gray-700 shadow hover:bg-gray-100 hover:text-gray-900"
						/>
					</button>
					<button on:click={() => changeImage('next')}>
						<ArrowRight
							class="h-8 w-8 cursor-pointer rounded-full border-2 border-green-800 bg-white p-1 text-gray-700 shadow hover:bg-gray-100 hover:text-gray-900"
						/>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	@media (max-width: 768px) {
		.modal-image {
			max-height: 90vh;
			max-width: 90vw;
		}
	}
</style>
