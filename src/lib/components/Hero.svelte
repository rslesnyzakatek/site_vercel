<script>
	import { goto } from '$app/navigation';
	import Button from '$lib/ui/Button.svelte';
	import { Phone, Mail, ShieldCheck, Building2, Bed, Heart, Utensils } from '@lucide/svelte';

	const features = [
		{
			icon: ShieldCheck,
			text: 'Legalnie funkcjonujący, zarejestrowany ośrodek opieki nad seniorem'
		},
		{
			icon: Building2,
			text: 'Nowy budynek wybudowany w 2025 roku'
		},
		{
			icon: Bed,
			text: '36 komfortowych, nowocześnie wyposażonych pokoi'
		},
		{
			icon: Heart,
			text: 'Profesjonalna opieka 24/7'
		},
		{
			icon: Utensils,
			text: 'Pyszne i pożywne posiłki przygotowywane we własnej kuchni'
		}
	];
</script>

<section
	class="relative min-h-[600px] items-center justify-center overflow-hidden bg-background p-4 lg:flex lg:min-h-[700px]"
>
	<div class="absolute inset-0">
		<picture>
			<source media="(min-width: 1024px)" srcset="/images/hero-panorama.webp" />
			<img
				src="/images/hero-small.webp"
				alt="Rezydencja Seniora Leśny Zakątek"
				title="Rezydencja Seniora Leśny Zakątek"
				class="h-full w-full object-fill md:object-cover"
			/>
		</picture>

		<div
			class="absolute bg-gradient-to-r from-transparent from-50% to-background/85 to-50% lg:inset-0"
		></div>
	</div>

	<div
		class="relative z-10 container mx-auto mt-24 rounded-xl bg-background/55 px-4 py-4 shadow-md md:px-0 md:shadow-none lg:mx-4 lg:bg-transparent"
	>
		<div class="flex items-center justify-center lg:mr-4 lg:justify-end xl:mr-16">
			<div class="max-w-xl space-y-8 text-left">
				<h1
					class="text-center text-4xl leading-tight font-bold text-balance md:text-5xl lg:text-left lg:text-6xl"
				>
					<span class=" text-primary">Rezydencja Seniora</span>
					<br />
					<span class="text-accent">Leśny Zakątek</span>
				</h1>

				<p class="text-center text-base text-foreground/90 md:text-lg lg:text-left">
					Nowoczesny dom opieki w otoczeniu jezior i lasów. <br />
					Profesjonalna opieka, komfort i serdeczna atmosfera dla Twoich bliskich.
				</p>

				<div class="hidden flex-wrap justify-center gap-6 pt-6 lg:flex lg:justify-start">
					<Button
						size="lg"
						clazz="text-base w-full px-6 py-5 hover:scale-105 transition-transform cursor-pointer"
						on:click={() => goto('/#contact')}
					>
						<Phone class="mr-2 h-5 w-5" />
						Skontaktuj się z nami
					</Button>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="bg-warm-green-subtle py-12">
	<div class="container mx-auto px-4">
		<div class="mx-auto max-w-7xl">
			<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
				{#each features as { icon: Icon, text }}
					<div
						class="group flex flex-col items-center gap-3 rounded-lg bg-primary/5 p-4 transition-all hover:bg-primary/10"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 transition-colors group-hover:bg-primary/20"
						>
							<Icon class="h-6 w-6 text-primary" />
						</div>
						<p class="text-center text-xs leading-snug font-medium text-foreground md:text-sm">
							{text}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
