<script lang="ts">
	import {
		Bed,
		Utensils,
		Activity,
		Home,
		TreePine,
		Accessibility,
		Users,
		Heart,
		Award,
		Stethoscope,
		Scissors,
		Sparkles,
		Wifi
	} from '@lucide/svelte';

	const facilities = [
		{
			icon: Bed,
			title: '36 komfortowych pokoi',
			description:
				'Eleganckie, nowo urządzone pokoje 2 i 3-osobowe w trzech skrzydłach budynku. Dodatkowe miejsca noclegowe dla odwiedzających rodzin.',
			image: '/images/room-3person-new.webp'
		},
		{
			icon: Utensils,
			title: 'Własna kuchnia',
			description:
				'Pyszne, świeże i zdrowe posiłki przygotowywane codziennie na miejscu. Przestronna, jasna stołówka z widokiem na zieleń.',
			image: '/images/kitchen-chefs.webp'
		},
		{
			icon: TreePine,
			title: 'Bliskość natury',
			description:
				'Ośrodek otoczony jeziorami i lasami. Idealne miejsce na spacery, jazdę na rowerze i aktywne spędzanie czasu na świeżym powietrzu.',
			image: '/images/senior-nature.webp'
		}
	];
</script>

<section id="facilities" class="mx-auto max-w-7xl scroll-m-8 bg-background py-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h2 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Udogodnienia i wyposażenie</h2>
			<p class="text-lg text-muted-foreground">
				Nowoczesny ośrodek wyposażony we wszystko, co potrzebne do komfortowego i aktywnego życia
				seniorów.
			</p>
		</div>

		<div class="mb-16 grid gap-8 md:grid-cols-3">
			{#each facilities as { icon: Icon, title, description, image }}
				<div
					class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100/50 shadow-lg transition-all duration-300 hover:shadow-2xl"
				>
					<div class="aspect-[4/3] overflow-hidden">
						<img
							src={image}
							alt={title}
							{title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					<div class="p-6 text-left">
						<div class="flex items-center gap-3">
							<Icon class="h-8 w-8 text-green-800" />
							<h3 class="text-2xl font-bold">{title}</h3>
						</div>
						<p class="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
					</div>
				</div>
			{/each}
		</div>

		<div
			class="group relative mb-16 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
		>
			<div class="aspect-[16/9] overflow-hidden">
				<img
					src="/images/team-caregivers.webp"
					alt="Profesjonalny zespół opiekunów"
					title="Profesjonalny zespół opiekunów"
					class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
				/>
			</div>
			<div class="bg-gradient-to-br from-green-50 to-green-100/50 p-8 text-left">
				<div class="flex items-center gap-3">
					<Users class="h-8 w-8 text-green-800" />
					<h3 class="text-xl font-bold md:text-4xl">Profesjonalny zespół opiekunów</h3>
				</div>
				<p
					class="mt-4 max-w-4xl text-xs leading-relaxed text-muted-foreground md:mb-6 md:block md:text-lg"
				>
					Naszym największym atutem są życzliwi, doświadczeni opiekunowie, którzy z sercem podchodzą
					do każdego mieszkańca. Zapewniamy profesjonalną opiekę medyczną i codzienne wsparcie w
					przyjaznej, rodzinnej atmosferze.
				</p>
				<div class="hidden flex-wrap gap-8 text-muted-foreground md:flex md:text-base">
					<div class="flex items-center gap-2">
						<Heart class="h-6 w-6 text-green-700" />
						<span class="font-semibold">Serdeczna opieka</span>
					</div>
					<div class="flex items-center gap-2">
						<Award class="h-6 w-6 text-green-700" />
						<span class="font-semibold">Doświadczenie</span>
					</div>
					<div class="flex items-center gap-2">
						<Users class="h-6 w-6 text-green-700" />
						<span class="font-semibold">Indywidualne podejście</span>
					</div>
				</div>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			<div
				class="rounded-xl border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
			>
				<Stethoscope class="mb-4 h-10 w-10 text-primary" />
				<h3 class="mb-3 text-xl font-bold text-foreground">Konsultacje specjalistyczne</h3>
				<p class="mb-3 leading-relaxed text-muted-foreground">
					Dostęp do prywatnych konsultacji z lekarzami specjalistami:
				</p>
				<div class="flex flex-wrap gap-2">
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Laryngolog
					</span>
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Kardiolog
					</span>
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Psychiatra
					</span>
				</div>
			</div>

			<div
				class="rounded-xl border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
			>
				<Sparkles class="mb-4 h-10 w-10 text-primary" />
				<h3 class="mb-3 text-xl font-bold text-foreground">Usługi kosmetyczne</h3>
				<p class="mb-3 leading-relaxed text-muted-foreground">
					Rezydenci mogą korzystać z szerokiej gamy usług:
				</p>
				<div class="flex flex-wrap gap-2">
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Fryzjer
					</span>
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Podolog
					</span>
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Kosmetyczka
					</span>
					<span
						class="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
					>
						Manicure & Pedicure
					</span>
				</div>
			</div>

			<div
				class="rounded-xl border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg"
			>
				<Wifi class="mb-4 h-10 w-10 text-primary" />
				<h3 class="mb-3 text-xl font-bold text-foreground">WiFi w całym budynku</h3>
				<p class="leading-relaxed text-muted-foreground">
					Zapewniamy bezpłatny dostęp do sieci WiFi na terenie całego ośrodka dla wygody naszych
					rezydentów i ich rodzin.
				</p>
			</div>
		</div>
	</div>
</section>
