<script>
	import {
		Clock,
		Brain,
		Dumbbell,
		Users2,
		Bike,
		Trees,
		HeartPulse,
		Sparkles,
		Heart
	} from '@lucide/svelte';

	import Card from '$lib/ui/Card.svelte';

	const features = [
		{
			icon: Clock,
			title: 'Opieka 24/7',
			description:
				'Profesjonalni, wyspecjalizowani opiekunowie zapewniają całodobową opiekę i wsparcie każdemu mieszkańcowi.'
		},
		{
			icon: Brain,
			title: 'Terapia zajęciowa',
			description:
				'Regularne zajęcia aktywizujące intelektualnie - gry planszowe, zagadki, warsztaty twórcze i spotkania kulturalne.'
		},
		{
			icon: Dumbbell,
			title: 'Rehabilitacja',
			description:
				'Profesjonalny rehabilitant na miejscu prowadzi indywidualne i grupowe zajęcia dostosowane do możliwości seniora.'
		}
	];

	const activities = [
		{
			icon: Users2,
			title: 'Pokój dzienny',
			description: 'Przestrzenne pomieszczenie do socjalizacji, spotkań i wspólnego spędzania czasu'
		},
		{
			icon: Trees,
			title: 'Spacery i nordic walking',
			description: 'Regularne spacery po okolicznych lasach i jeziorach w towarzystwie opiekunów'
		},
		{
			icon: Bike,
			title: 'Aktywność na świeżym powietrzu',
			description: 'Rowery, zajęcia w ogrodzie i inne aktywności dostosowane do sprawności seniora'
		}
	];
</script>

<section
	id="activities"
	class="scroll-m-8 bg-gradient-to-b from-warm-green-soft to-background py-20"
>
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Aktywności i zajęcia</h2>
			<p class="text-lg text-muted-foreground">
				Dbamy o to, by nasi mieszkańcy byli aktywni fizycznie, społecznie i intelektualnie. <br />
				Każdy dzień w naszym ośrodku to możliwość rozwoju i radości z życia.
			</p>
		</div>

		<div class="mx-auto mb-12 grid max-w-6xl gap-8 lg:grid-cols-2">
			<div class="space-y-6">
				{#each features as { icon: Icon, title, description }}
					<Card
						clazz="border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0">
								<div
									class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
								>
									<Icon class="h-8 w-8 text-primary" />
								</div>
							</div>
							<div>
								<h3 class="mb-3 text-xl font-semibold text-card-foreground">
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

			<div class="space-y-6">
				<div class="overflow-hidden rounded-lg shadow-lg">
					<img
						src="/images/rehabilitation-exercise.webp"
						alt="Rehabilitacja z profesjonalnym fizjoterapeutą"
						title="Rehabilitacja z profesjonalnym fizjoterapeutą"
						class="h-64 w-full object-cover"
					/>
				</div>
				<div class="overflow-hidden rounded-lg shadow-lg">
					<img
						title="Spacery i nordic walking w grupie"
						src="/images/seniors-walking.webp"
						alt="Spacery i nordic walking w grupie"
						class="h-64 w-full object-cover"
					/>
				</div>
			</div>
		</div>

		<div class="mx-auto mb-12 max-w-6xl">
			<Card clazz="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 p-8">
				<div class="mb-6 flex items-start gap-4">
					<div class="rounded-lg bg-green-200 p-3">
						<HeartPulse class="h-8 w-8 text-green-800" />
					</div>
					<div>
						<h3 class="mb-2 text-2xl font-bold text-green-900">
							Holistyczne podejście do aktywności
						</h3>
						<p class="leading-relaxed text-green-800">
							W Leśnym Zakątku dbamy o pełną aktywizację naszych mieszkańców w trzech kluczowych
							wymiarach:
						</p>
					</div>
				</div>
				<div class="mt-6 grid gap-6 md:grid-cols-3">
					<div class="flex items-start gap-3">
						<Sparkles class="mt-1 h-6 w-6 flex-shrink-0 text-green-700" />
						<div>
							<h4 class="mb-1 font-semibold text-green-900">Fizycznie</h4>
							<p class="text-sm text-green-800">Rehabilitacja, spacery i aktywności ruchowe</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<Sparkles class="mt-1 h-6 w-6 flex-shrink-0 text-green-700" />
						<div>
							<h4 class="mb-1 font-semibold text-green-900">Społecznie</h4>
							<p class="text-sm text-green-800">Integracja, spotkania i wspólne aktywności</p>
						</div>
					</div>
					<div class="flex items-start gap-3">
						<Sparkles class="mt-1 h-6 w-6 flex-shrink-0 text-green-700" />
						<div>
							<h4 class="mb-1 font-semibold text-green-900">Intelektualnie</h4>
							<p class="text-sm text-green-800">Terapia zajęciowa i stymulacja umysłowa</p>
						</div>
					</div>
				</div>
			</Card>
		</div>

		<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
			<div class="space-y-6">
				{#each activities as { icon: Icon, title, description }}
					<Card
						clazz="border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<div class="flex items-start gap-4">
							<div class="flex-shrink-0">
								<div
									class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10"
								>
									<Icon class="h-7 w-7 text-primary" />
								</div>
							</div>
							<div>
								<h4 class="mb-2 text-lg font-semibold text-foreground">
									{title}
								</h4>
								<p class="text-sm text-muted-foreground">{description}</p>
							</div>
						</div>
					</Card>
				{/each}
			</div>

			<div class="space-y-6">
				<div class="overflow-hidden rounded-lg shadow-lg">
					<img
						title="Seniorzy w pokoju dziennym - integracja i socjalizacja"
						src="/images/seniors-socializing.webp"
						alt="Seniorzy w pokoju dziennym - integracja i socjalizacja"
						class="h-64 w-full object-cover"
					/>
				</div>
				<div class="overflow-hidden rounded-lg shadow-lg">
					<img
						title="Seniorzy w pokoju dziennym - integracja i socjalizacja"
						src="/images/seniors-games.webp"
						alt="Seniorzy podczas terapii zajęciowej - gry i zabawy"
						class="h-64 w-full object-cover"
					/>
				</div>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-6xl rounded-2xl bg-primary p-8 text-primary-foreground md:p-12">
			<div class="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
				<div class="flex-shrink-0">
					<div class="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
						<Heart class="h-8 w-8 text-accent" />
					</div>
				</div>
				<div>
					<h3 class="mb-3 text-2xl font-bold">Komfortowe pokoje dla odwiedzających</h3>
					<p class="leading-relaxed text-primary-foreground/90">
						Bliskość rodziny to najlepsze wsparcie, jakie można ofiarować seniorowi. W naszym
						ośrodku zapewniamy możliwość noclegu dla odwiedzających — w wygodnych, przytulnych
						pokojach gościnnych. Dzięki temu mogą Państwo spędzić z bliskimi tyle czasu, ile
						potrzeba.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
