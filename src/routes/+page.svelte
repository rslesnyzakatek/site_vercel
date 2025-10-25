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
</svelte:head>

<Hero />
<About />
<Facilities />
<Rooms />
<Activities />
<Dining />
<Location />
<Contact />
