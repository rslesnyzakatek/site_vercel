<script>
	import Button from '$lib/ui/Button.svelte';
	import { ArrowLeft, Calendar, Link, User } from '@lucide/svelte';

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
				<span class="flex items-center gap-2">
					<User class="h-5 w-5" />
					Rezydencja Seniora Leśny Zakątek
				</span>
			</div>

			<div class="mb-8 aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
				<img src={data.meta.thumbnail} alt={data.meta.title} class="h-full w-full object-cover" />
			</div>
		</header>

		<div class="prose prose-lg blog-content max-w-none">
			<svelte:component this={data.content} />
		</div>

		<div class="mt-12 border-t border-border pt-8">
			<a href="/blog">
				<Button variant="outline" clazz="gap-2 cursor-pointer">
					<ArrowLeft class="h-4 w-4" />
					Powrót do listy artykułów
				</Button>
			</a>
		</div>
	</article>
</main>

<style>
	header {
		margin-bottom: 2rem;
		border-bottom: 1px solid #eee;
		padding-bottom: 1rem;
	}

	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.blog-content :global(p) {
		margin-bottom: 1.5em;
		line-height: 1.6;
		font-size: 1.1rem;
	}

	.blog-content :global(h2) {
		margin-top: 2em;
		margin-bottom: 0.5em;
		font-size: 1.8rem;
		font-weight: bold;
	}

	.blog-content :global(ul),
	.blog-content :global(ol) {
		margin-bottom: 1.5em;
		padding-left: 1.5em;
		list-style-type: disc;
	}

	.blog-content :global(strong) {
		font-weight: bold;
	}
</style>
