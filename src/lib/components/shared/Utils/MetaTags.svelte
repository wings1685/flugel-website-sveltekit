<script lang="ts">
	import type { SiteMeta } from "$lib/_global/lib/meta";

	const props: SiteMeta = $props();
</script>
<svelte:head>
	<title>{ props.title }</title>
	<meta name="description" content={ props.description } />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ props.title } />
	<meta property="og:description" content={ props.description } />
	<meta property="og:site_name" content={ props.title } />
	{#if props.ogImage}
		<meta property="og:image" content={ props.ogImage } />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
