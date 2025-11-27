<script>
	import Button from '$lib/ui/Button.svelte';
	import { ArrowLeft, Calendar, Link } from '@lucide/svelte';

	export let data;

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	const formatted = new Date(data.meta.date).toLocaleDateString('pl-PL', options);
</script>

<main class="pt-24 pb-20">
	<article class="container mx-auto max-w-4xl px-4">
		<a href="/blog" class="mb-8 inline-flex items-center gap-2 text-primary hover:underline">
			<ArrowLeft class="h-4 w-4" />
			Powrót do bloga
		</a>

		<header class="mb-8">
			<h1 class="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
				{data.meta.title}
			</h1>

			<div class="mb-8 flex flex-wrap items-center gap-4 text-muted-foreground">
				<span class="flex items-center gap-2">
					<Calendar class="h-5 w-5" />
					{formatted}
				</span>
			</div>

			<div class="mb-8 aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
				<img src={data.meta.thumbnail} alt={data.meta.title} class="h-full w-full object-cover" />
			</div>
		</header>

		<div class="prose prose-lg max-w-none">
			<svelte:component this={data.content} />
		</div>

		<div class="mt-12 border-t border-border pt-8">
			<a href="/blog">
				<Button variant="outline" clazz="gap-2">
					<ArrowLeft class="h-4 w-4" />
					Powrót do listy artykułów
				</Button>
			</a>
		</div>
	</article>
</main>
