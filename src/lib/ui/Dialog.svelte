<script lang="ts">
	import { ArrowLeft, ArrowRight, Expand, X } from '@lucide/svelte';

	const images = [
		{ src: '/images/room-2person.webp', alt: 'Pokój 2-osobowy z dostępem do ogrodu' },
		{ src: '/images/room-3person-new.webp', alt: 'Przestronny pokój 3-osobowy' },
		{ src: '/images/room-2beds-blue.webp', alt: 'Elegancki pokój 2-osobowy' },
		{ src: '/images/room-window-view.webp', alt: 'Pokój z widokiem na zieleń' },
		{ src: '/images/room-care-beds.webp', alt: 'Pokój z łóżkami medycznymi' },
		{ src: '/images/room-bathroom.webp', alt: 'Dostosowana łazienka' },
		{ src: '/images/gallery-bed-detail.webp', alt: 'Komfortowe wyposażenie' }
	];

	export let img_nr = 0;
	export let img_alt = 'Dialog Image';
	export let type = 'big';

	let currentIndex = img_nr;
	let showImage = false;

	const openImage = (index: number) => {
		currentIndex = index;
		showImage = true;
	};

	const closeImage = () => {
		showImage = false;
	};

	const changeImage = (direction: 'next' | 'prev') => {
		if (direction === 'next') {
			currentIndex = (currentIndex + 1) % images.length;
		} else if (direction === 'prev') {
			currentIndex = (currentIndex - 1 + images.length) % images.length;
		}
	};
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	class="group relative w-full cursor-pointer overflow-hidden rounded-lg shadow-lg"
	class:h-20={type === 'small'}
	class:h-64={type === 'medium'}
	class:h-80={type === 'big'}
	on:click={() => openImage(img_nr)}
>
	<img
		src={images[img_nr]?.src}
		alt={img_alt}
		title={img_alt}
		class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
	/>
	<div
		class="invisible absolute inset-0 top-0 left-0 z-20 flex h-full items-center justify-center bg-black/20 transition-all duration-100 group-hover:visible group-hover:opacity-100"
	>
		<Expand class="h-8 w-8 text-white" />
	</div>
</div>

{#if showImage}
	<div class="fixed inset-0 z-30 mt-10 flex items-center justify-center bg-black/70 p-4">
		<div class="relative max-h-full max-w-full overflow-auto rounded-lg bg-white p-4 shadow-lg">
			<div class="absolute top-0 left-0 z-40 flex h-full w-full items-center">
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

			<img
				src={images[currentIndex]?.src}
				alt={images[currentIndex]?.alt}
				title={images[currentIndex]?.alt}
				class="max-h-[80vh] max-w-[80vw] object-contain"
			/>

			<button
				class="absolute top-2 right-2 z-50 cursor-pointer rounded-full border-2 border-green-800 bg-white p-1 shadow hover:bg-gray-100"
				on:click={closeImage}
			>
				<X class="h-6 w-6 text-gray-700 hover:text-gray-900" />
			</button>
		</div>
	</div>
{/if}
