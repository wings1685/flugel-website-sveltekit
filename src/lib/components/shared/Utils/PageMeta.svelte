<script lang="ts">
	import { siteDescription, siteTitle } from "$lib/_global/lib/shared";
	import type { DeepGuard } from "$lib/_global/types/types";

	type Props = {
		title: string;
		description?: string;
	};

	const props: DeepGuard<Props> = $props();

	const title = $derived(`${props.title} | ${siteTitle}`);
	const description = $derived(props.description ?? siteDescription);
</script>
<svelte:head>
	<title>{ title }</title>
	<meta property="og:type" content="website" />
	<meta property="og:title" content={ title } />
	<meta property="og:description" content={ description } />
	<meta property="og:site_name" content={ title } />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="description" content={ description } />
</svelte:head>
