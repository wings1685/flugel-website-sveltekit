<script lang="ts">
	import type { MetaData } from "$lib/_global/lib/meta";

	const props: MetaData = $props();
</script>
<svelte:head>
	<title>{ props.title }</title>
	<meta name="description" content={ props.description } />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ props.title } />
	<meta property="og:description" content={ props.description } />
	<meta property="og:site_name" content={ props.siteTitle } />
	{#if props.ogImage}
		<meta property="og:image" content={ props.ogImage } />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
