<script lang="ts">
	export let clazz = '';
</script>

<div class={`rounded-lg border bg-card text-card-foreground shadow-sm ${clazz}`}>
	<slot />
</div>
