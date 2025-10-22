<script>
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Facilities from '$lib/components/Facilities.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Location from '$lib/components/Location.svelte';
	import Rooms from '$lib/components/Rooms.svelte';
	import Activities from '$lib/components/Activities.svelte';
	import Dining from '$lib/components/Dining.svelte';
</script>

<svelte:head>
	<title>Rezydencja Seniora Leśny Zakątek | Dom Opieki w Nowogardzie</title>
	<meta
		name="description"
		content="Nowoczesny dom opieki nad osobami starszymi w Nowogardzie. Profesjonalna opieka, rehabilitacja, komfortowe warunki w otoczeniu przyrody."
	/>
	<meta name="author" content="Rezydencja Seniora Leśny Zakątek" />
	<meta
		name="keywords"
		content="dom opieki, senior, Nowogard, opieka nad osobami starszymi, rehabilitacja, zachodniopomorskie"
	/>

	<meta property="og:title" content="Rezydencja Seniora Leśny Zakątek | Dom Opieki w Nowogardzie" />
	<meta
		property="og:description"
		content="Nowoczesny dom opieki nad osobami starszymi w Nowogardzie. Profesjonalna opieka, rehabilitacja, komfortowe warunki w otoczeniu przyrody."
	/>
	<meta property="og:type" content="website" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Rezydencja seniora Leśny Zakątek",
			"url": "https://rslesnyzakatek.pl"
		}
	</script>
</svelte:head>

<Hero />
<About />
<Facilities />
<Rooms />
<Activities />
<Dining />
<Location />
<Contact />
