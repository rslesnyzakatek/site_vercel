<script>
	import { Coffee, UtensilsCrossed, Heart, Users } from '@lucide/svelte';

	const meals = [
		{ icon: UtensilsCrossed, title: 'Śniadanie', description: 'Pełnowartościowy początek dnia' },
		{ icon: Coffee, title: 'Słodki Lunch', description: 'Kawa i coś słodkiego' },
		{ icon: UtensilsCrossed, title: 'Obiad', description: 'Ciepły, pełnowartościowy posiłek' },
		{ icon: Coffee, title: 'Podwieczorek', description: 'Lekka przekąska' },
		{ icon: UtensilsCrossed, title: 'Kolacja', description: 'Pożywny posiłek wieczorny' }
	];
</script>

<section
	id="dining"
	class="mx-auto scroll-m-8 bg-gradient-to-b from-warm-green-soft to-background py-20"
>
	<div class="container mx-auto max-w-6xl px-4">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-foreground md:text-5xl">Własna Kuchnia i Posiłki</h2>
			<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
				Jako jeden z nielicznych ośrodków opieki nad seniorem posiadamy własną kuchnię
			</p>
		</div>

		<div class="mb-16 grid items-center gap-12 md:grid-cols-2">
			<div>
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full bg-primary/10 p-3">
						<UtensilsCrossed class="h-8 w-8 text-primary" />
					</div>
					<h3 class="text-2xl font-semibold text-foreground">Świeże Posiłki Codziennie</h3>
				</div>
				<p class="mb-6 leading-relaxed text-muted-foreground">
					W naszej własnej kuchni każdego dnia przygotowywane są wszystkie posiłki ze świeżych
					produktów. Serwujemy 5 posiłków dziennie, dostosowanych do indywidualnych potrzeb każdego
					podopiecznego.
				</p>
				<div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
					{#each meals as { icon: Icon, title, description }}
						<div
							class="rounded-lg border border-border bg-card p-4 text-center transition-shadow hover:shadow-md"
						>
							<Icon class="mx-auto mb-2 h-6 w-6 text-primary" />
							<p class="text-sm font-medium text-foreground">{title}</p>
							<p class="mt-1 text-xs text-muted-foreground">{description}</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<img
					src="/images/kitchen-chefs.webp"
					title="Profesjonalni kucharze przygotowujący posiłki w kuchni"
					alt="Profesjonalni kucharze przygotowujący posiłki w kuchni"
					class="h-64 w-full rounded-lg object-cover shadow-lg"
				/>
				<img
					src="/images/senior-food-prep.webp"
					title="Przygotowywanie zdrowych posiłków"
					alt="Przygotowywanie zdrowych posiłków"
					class="h-64 w-full rounded-lg object-cover shadow-lg"
				/>
			</div>
		</div>

		<div class="grid items-center gap-12 md:grid-cols-2">
			<div class="order-2 md:order-1">
				<img
					src="/images/dining-room.webp"
					title="Przestronna jadalnia ośrodka"
					alt="Przestronna jadalnia ośrodka"
					class="h-80 w-full rounded-lg object-cover shadow-lg"
				/>
			</div>

			<div class="order-1 md:order-2">
				<div class="mb-6 flex items-center gap-3">
					<div class="rounded-full bg-primary/10 p-3">
						<Users class="h-8 w-8 text-primary" />
					</div>
					<h3 class="text-2xl font-semibold text-foreground">Przestronna Jadalnia</h3>
				</div>
				<p class="mb-6 leading-relaxed text-muted-foreground">
					Posiadamy dużą, jasną stołówkę, która jest wspaniałym miejscem do integracji i spędzania
					wspólnego czasu podczas posiłków. To tutaj nasi podopieczni dzielą się historiami i budują
					więzi.
				</p>

				<div class="space-y-4">
					<div class="flex gap-3">
						<div class="h-fit rounded-full bg-primary/10 p-2">
							<Heart class="h-5 w-5 text-primary" />
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-foreground">Indywidualne Diety</h4>
							<p class="text-sm text-muted-foreground">
								Konsultujemy potrzeby każdego podopiecznego i uwzględniamy je w jego diecie - od
								diet lekkostrawnych, po specjalne wymagania zdrowotne.
							</p>
						</div>
					</div>

					<div class="flex gap-3">
						<div class="h-fit rounded-full bg-primary/10 p-2">
							<Users class="h-5 w-5 text-primary" />
						</div>
						<div>
							<h4 class="mb-1 font-semibold text-foreground">Miejsce Integracji</h4>
							<p class="text-sm text-muted-foreground">
								Wspólne posiłki to doskonała okazja do socjalizacji i budowania przyjaznej atmosfery
								w naszym ośrodku.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
