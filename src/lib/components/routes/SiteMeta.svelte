<script lang="ts">
	import { untrack } from "svelte";
	import { buildMeta } from "$lib/_global/lib/meta";
	import { MetaTags } from "../shared/Utils";
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { YamlFiles, MetaProps } from "$lib/_global/lib/meta";

	const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;
	const pageData = import.meta.glob('./**/Page.svelte', { eager: true });

	const props: DeepGuard<MetaProps> = $props();
	const pageProps = untrack(() => props);
	const meta = buildMeta({ ...pageProps, globData, pageData });
</script>
<MetaTags { ...meta } />
