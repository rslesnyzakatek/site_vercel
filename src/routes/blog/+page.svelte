<script>
	import { Calendar, ArrowRight } from '@lucide/svelte';

	export let data;

	const formatDate = (date) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		};
		return new Date(date).toLocaleDateString('pl-PL', options);
	};
</script>

<section class="pt-24 pb-20">
	<div class="container mx-auto px-4">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<h1 class="mb-6 text-4xl font-bold text-primary md:text-5xl">Blog i porady</h1>
			<p class="text-lg text-muted-foreground">
				Znajdź przydatne informacje, wskazówki zdrowotne i aktualności ze świata opieki senioralnej
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<a
					href={`/blog/${post.slug}`}
					class="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:shadow-xl"
				>
					<div class="aspect-[16/9] overflow-hidden">
						<img
							src={post.thumbnail}
							alt={post.title}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
						/>
					</div>
					<div class="p-6">
						<div class="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
							<span class="flex items-center gap-1">
								<Calendar class="h-4 w-4" />
								{formatDate(post.date)}
							</span>
						</div>
						<h2
							class="mb-3 line-clamp-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary"
						>
							{post.title}
						</h2>
						<p class="mb-4 line-clamp-3 text-muted-foreground">
							{post.shortDescription}
						</p>
						<span
							class="inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3"
						>
							Czytaj więcej
							<ArrowRight class="h-4 w-4" />
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
