<script lang="ts">
	import { untrack } from "svelte";
	import { buildMeta } from "$lib/_global/lib/meta";
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { YamlFiles, MetaProps } from "$lib/_global/lib/meta";
	import { Meta } from "../shared/Utils";

	const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;

	const props: DeepGuard<MetaProps> = $props();
	const pageProps = untrack(() => props);
	const meta = buildMeta({ ...pageProps, globData });
</script>
<Meta { ...meta } />
