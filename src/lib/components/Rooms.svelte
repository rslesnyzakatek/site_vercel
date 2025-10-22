<script lang="ts">
	import Dialog from '$lib/ui/Dialog.svelte';
	import { Bed, CheckCircle2, Home, Palmtree } from '@lucide/svelte';

	const images = [
		{ src: '/images/room-2person.webp', alt: 'Pokój 2-osobowy z dostępem do ogrodu' },
		{ src: '/images/room-3person-new.webp', alt: 'Przestronny pokój 3-osobowy' },
		{ src: '/images/room-2beds-blue.webp', alt: 'Elegancki pokój 2-osobowy' },
		{ src: '/images/room-window-view.webp', alt: 'Pokój z widokiem na zieleń' },
		{ src: '/images/room-care-beds.webp', alt: 'Pokój z łóżkami medycznymi' },
		{ src: '/images/room-bathroom.webp', alt: 'Dostosowana łazienka' },
		{ src: '/images/gallery-bed-detail.webp', alt: 'Komfortowe wyposażenie' }
	];

	const features = [
		{
			icon: Bed,
			title: '36 nowoczesnych pokoi',
			description:
				'Eleganckie, nowo urządzone 2 lub 3-osobowe pokoje dostosowane do potrzeb seniora'
		},
		{
			icon: Palmtree,
			title: 'Bezpośredni dostęp do patio',
			description: 'Z każdego pokoju można wyjść bezpośrednio na zewnątrz i cieszyć się naturą'
		},
		{
			icon: Home,
			title: 'Parter bez barier',
			description: 'Budynek dostosowany do osób niepełnosprawnych - wszystkie pokoje na parterze'
		}
	];
</script>

<section id="rooms" class="scroll-m-8 bg-gradient-to-b from-warm-green-soft to-background py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Komfortowe pokoje</h2>
			<p class="text-lg text-muted-foreground">
				Wszystkie nasze pokoje są eleganckie, nowo urządzone i zaprojektowane z myślą o komforcie i
				wygodzie mieszkańców.
			</p>
		</div>

		<div class="mx-auto mb-16 max-w-6xl items-center gap-12 lg:grid lg:grid-cols-2">
			<div class="mx-auto mt-10 mb-16 grid max-w-6xl items-center gap-12 lg:mt-0 lg:mb-0">
				<div class="space-y-4">
					<div class="grid grid-cols-2 gap-4">
						{#each images.slice(0, 2) as image, i}
							<Dialog img_nr={i} img_alt={image.alt} type="medium" />
						{/each}
					</div>
					<Dialog img_nr={2} img_alt={images[2].alt} />
					<div class="grid grid-cols-4 gap-2 pt-2">
						<Dialog img_nr={3} img_alt={images[3].alt} type="small" />
						<Dialog img_nr={4} img_alt={images[4].alt} type="small" />
						<Dialog img_nr={5} img_alt={images[5].alt} type="small" />
						<Dialog img_nr={6} img_alt={images[6].alt} type="small" />
					</div>
				</div>
			</div>

			<div class="space-y-8">
				<div class="space-y-6">
					{#each features as { icon: Icon, title, description }}
						<div class="flex gap-4">
							<div class="flex-shrink-0">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
									<Icon class="h-6 w-6 text-primary" />
								</div>
							</div>
							<div>
								<h3 class="mb-2 text-xl font-semibold text-foreground">
									{title}
								</h3>
								<p class="text-muted-foreground">{description}</p>
							</div>
						</div>
					{/each}
				</div>

				<div class="border-t border-border pt-6">
					<h4 class="mb-4 font-semibold text-foreground">Każdy pokój wyposażony w:</h4>
					<ul class="space-y-3">
						<li class="flex items-start gap-2 text-muted-foreground">
							<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span>Wygodne łózka z materacami najwyższej jakości</span>
						</li>
						<li class="flex items-start gap-2 text-muted-foreground">
							<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span>Taras z dostępem do zieleni</span>
						</li>
						<li class="flex items-start gap-2 text-muted-foreground">
							<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span>Nowoczesne meble i funkcjonalne wyposażenie</span>
						</li>
						<li class="flex items-start gap-2 text-muted-foreground">
							<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span>Łazienka dostosowana do potrzeb osób niepełnosprawnych</span>
						</li>
						<li class="flex items-start gap-2 text-muted-foreground">
							<CheckCircle2 class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
							<span>Jasne i przestronne wnętrze pełne światła</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
