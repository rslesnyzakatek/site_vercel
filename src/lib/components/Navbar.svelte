<script>
	import Button from '$lib/ui/Button.svelte';
	import { MenuIcon } from '@lucide/svelte';
	import logo from '$lib/assets/logo-light.svg';
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let navbarVisible = false;

	const toggleMenu = () => {
		navbarVisible = !navbarVisible;
	};

	const navLinks = [
		{ label: 'O nas', href: '/#about' },
		{ label: 'Udogodnienia', href: '/#facilities' },
		{ label: 'Pokoje', href: '/#rooms' },
		{ label: 'Aktywności', href: '/#activities' },
		{ label: 'Posiłki', href: '/#dining' },
		{ label: 'Lokalizacja', href: '/#location' },
		{ label: 'Galeria', href: '/gallery' }
	];

	let scrolling = false;

	const scrollToContact = () => {
		goto('/#contact');

		if (navbarVisible) {
			navbarVisible = false;
		}
	};

	$: {
		try {
			window.onscroll = () => {
				if (window.scrollY > 20) {
					scrolling = true;
				} else {
					scrolling = false;
				}
			};
		} catch (e) {}
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 bg-green-900 transition-all duration-300 md:bg-transparent"
	class:scroll={scrolling}
	class:unscroll={!scrolling}
>
	<div class="container mx-auto max-w-7xl px-4">
		<div class="flex h-20 items-center justify-between">
			<a class="h-14" href="/">
				<img src={logo} alt="Leśny Zakątek" title="Leśny Zakątek" class="h-full w-auto" />
			</a>
			<button on:click={toggleMenu} aria-label="Otwórz menu" class="lg:hidden">
				<MenuIcon class="h-6 w-6 cursor-pointer text-white hover:text-green-200 lg:hidden" />
			</button>
			<div class="hidden items-center lg:flex">
				<ul class="hidden items-center space-x-8 lg:flex">
					{#each navLinks as { label, href }}
						<li class="text-white transition-colors duration-200 hover:text-green-200">
							<a data-sveltekit-reload {href}>{label}</a>
						</li>
					{/each}
					<li>
						<Button clazz="ml-4 hidden cursor-pointer" size="lg" on:click={scrollToContact}
							>Kontakt</Button
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
	{#if navbarVisible}
		<div
			class="absolute right-0 left-0 z-50 mx-4 mt-4 flex flex-col space-y-2 rounded-xl bg-card p-4 text-left text-xl md:hidden"
			in:fly={{ y: -100, duration: 300 }}
			out:fly={{ y: -100, duration: 300 }}
		>
			<ul class="flex flex-col space-y-4">
				{#each navLinks as { label, href }}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
					<li
						on:click={() => {
							navbarVisible = false;
						}}
					>
						<a
							{href}
							class="block rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
			<div class="px-4 pt-2">
				<Button clazz="w-full" size="lg" on:click={scrollToContact}>Kontakt</Button>
			</div>
		</div>
	{/if}
</nav>
