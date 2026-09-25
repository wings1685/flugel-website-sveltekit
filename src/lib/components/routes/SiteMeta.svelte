<script lang="ts">
	import { untrack } from "svelte";
	import { buildMeta } from "$lib/_global/lib/meta";
	import { MetaTags } from "../shared/Utils";
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { YamlFiles, MetaProps } from "$lib/_global/lib/meta";

	const globData = import.meta.glob('./**/_data/meta.yaml', { eager: true }) as YamlFiles;
	const pageData = import.meta.glob('./**/Page.svelte', { eager: true });
	const pagePaths = Object.keys(pageData).map(path => `/${path.split('/').slice(1, -1).join('/')}`);

	const props: DeepGuard<MetaProps> = $props();
	const pageProps = untrack(() => props);
	if (pageProps.dir && !pagePaths.includes(pageProps.dir)) {
		const getParentDir = (dir: string) => dir.split('/').filter((d, i) => d || i === 0).slice(0, -1).join('/') || '/';
		const parentDir = getParentDir(pageProps.dir);
		const availableDirs = pagePaths.filter(path => getParentDir(path) === parentDir);
		console.error('Undefined directory, available directories: ', availableDirs);
	}
	const meta = buildMeta({ ...pageProps, globData });
</script>
<MetaTags { ...meta } />
