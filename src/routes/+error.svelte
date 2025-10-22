<script>
	import Card from '$lib/ui/Card.svelte';
	import { page } from '$app/state';
</script>

<section
	class="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-warm-green-subtle to-warm-green-soft py-20"
>
	<div class="container mx-4 w-fit rounded-lg bg-card p-10 text-center shadow-lg">
		<h1 class="mb-4 text-4xl font-bold text-primary md:text-5xl">
			{page.status}
			{page.error?.message}
		</h1>
		<h2 class="mb-4 text-2xl text-primary md:text-3xl">Coś poszło nie tak</h2>
		<p class="text-lg text-muted-foreground">
			Przepraszamy za niedogodności. Prosimy spróbować ponownie później lub wrócić na stronę główną.
		</p>
		<a
			href="/"
			class="mt-6 inline-block rounded bg-primary px-6 py-3 text-white transition-colors hover:bg-primary/90"
		>
			Wróć na strone główną
		</a>
	</div>
</section>
