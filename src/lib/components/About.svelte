<script lang="ts">
	import Card from '$lib/ui/Card.svelte';
	import { Shield, Heart, Users, Award } from '@lucide/svelte';

	const features = [
		{
			icon: Shield,
			title: 'Legalność i bezpieczeństwo',
			description:
				'Na mocy decyzji nr WZPS-3.9423.5.2025.EG z dnia 30.09.2025r. nasz ośrodek został wpisany pod numerem 32 do rejestru placówek zapewniających całodobową opiekę osobom niepełnosprawnym, przewlekle chorym lub osobom w podeszłym wieku, prowadzonego przez Wojewodę Zachodniopomorskiego.'
		},
		{
			icon: Heart,
			title: 'Profesjonalna opieka',
			description:
				'Nasi wykwalifikowani opiekunowie czuwają nad dobrem naszych podopiecznych 24 godziny na dobę, 7 dni w tygodniu.'
		},
		{
			icon: Users,
			title: 'Wyspecjalizowana kadra',
			description:
				'Nasz zespół to profesjonalni opiekunowie z sercem na dłoni, dla których rodzinna atmosfera i szacunek wobec rezydentów są priorytetem.'
		},
		{
			icon: Award,
			title: 'Najwyższe standardy',
			description:
				'Nowo wybudowany w 2025 roku obiekt spełniający najwyższe standardy komfortu i bezpieczeństwa dla osób starszych.'
		}
	];
</script>

<section
	id="about"
	class="scroll-m-8 bg-gradient-to-b from-warm-green-subtle to-warm-green-soft py-20"
>
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">
				Opieka na najwyższym poziomie
			</h2>
			<p class="text-lg text-balance text-muted-foreground">
				Rezydencja Seniora Leśny Zakątek to nowo wybudowany ośrodek opieki nad osobami starszymi,
				który łączy profesjonalizm z domową atmosferą blisko jezior i lasów.
			</p>
		</div>

		<div class="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 lg:gap-12">
			<div class="space-y-6">
				{#each features as { icon: Icon, title, description }}
					<Card
						clazz="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border"
					>
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0 rounded-lg bg-primary/10 p-3">
								<Icon class="h-7 w-7 text-primary" />
							</div>
							<div>
								<h3 class="mb-2 text-lg font-semibold text-card-foreground">
									{title}
								</h3>
								<p class="text-sm leading-relaxed text-muted-foreground">
									{description}
								</p>
							</div>
						</div>
					</Card>
				{/each}
			</div>

			<div class="relative overflow-hidden rounded-xl shadow-2xl">
				<img
					src="/images/caregiver-support.webp"
					alt="Profesjonalna opieka nad seniorem"
					title="Profesjonalna opieka nad seniorem"
					class="h-full w-full object-cover"
				/>
			</div>
		</div>
	</div>
</section>
