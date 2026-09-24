<script lang="ts">
	import { untrack } from "svelte";
	import { buildMeta } from "$lib/_global/lib/meta";
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { YamlFiles, MetaProps } from "$lib/_global/lib/meta";

	const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;

	const props: DeepGuard<MetaProps> = $props();
	const pageProps = untrack(() => props);
	const meta = buildMeta({ ...pageProps, globData });
</script>
<svelte:head>
	<title>{ meta.title }</title>
	<meta name="description" content={ meta.description } />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ meta.title } />
	<meta property="og:description" content={ meta.description } />
	<meta property="og:site_name" content={ meta.title } />
	{#if meta.ogImage}
		<meta property="og:image" content={ meta.ogImage } />
	{/if}
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
