<script lang="ts">
	import Card from '$lib/ui/Card.svelte';
	import { MapPin, Car, Plane, Navigation } from '@lucide/svelte';

	const locationFeatures = [
		{
			icon: MapPin,
			title: 'Nowogard, Zachodniopomorskie',
			description: 'Spokojne otoczenie na obrzeżach miasta'
		},
		{
			icon: Car,
			title: '2 km od węzła S6',
			description: 'Doskonałe połączenie drogowe'
		},
		{
			icon: Plane,
			title: '20 km od lotniska',
			description: 'Szczecin-Goleniów w zasięgu ręki'
		},
		{
			icon: Navigation,
			title: 'Świetnie skomunikowane',
			description: 'Łatwy dojazd z całego regionu'
		}
	];
</script>

<section
	id="location"
	class="scroll-m-8 bg-gradient-to-b from-warm-green-soft to-warm-green-subtle py-20"
>
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Idealna lokalizacja</h2>
			<p class="text-lg text-muted-foreground">
				Ośrodek znajduje się w bezpośrednim sąsiedztwie pięknego Jeziora Nowogardzkiego. <br />
				Bliskość jezior i lasów w połączeniu z doskonałą dostępnością komunikacyjną. <br /> Idealne miejsce
				na spacery i jazdę na rowerze.
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each locationFeatures as { icon: Icon, title, description } (title)}
				<Card
					clazz="bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-border"
				>
					<div
						class="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
					>
						<Icon class="h-8 w-8 text-primary" />
					</div>
					<h3 class="mb-2 text-lg font-semibold text-card-foreground">
						{title}
					</h3>
					<p class="text-sm text-muted-foreground">{description}</p>
				</Card>
			{/each}
		</div>

		<div class="mx-auto mt-16 max-w-4xl">
			<div class="aspect-video overflow-hidden rounded-xl bg-muted shadow-lg">
				<div style="width: 100%">
					<iframe
						title="map"
						width="100%"
						height="600"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=53.659361,15.097667&amp;center=53.659361,15.097667&amp;zoom=14&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/"
							>nav</a
						>
					</iframe>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	/* Dodanie stylów dla responsywności iframe */
	iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	.aspect-video {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 aspect ratio */
		height: 0;
		overflow: hidden;
	}

	.aspect-video iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
