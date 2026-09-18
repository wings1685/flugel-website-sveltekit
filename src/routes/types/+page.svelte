<script lang="ts">
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { CodesProps } from '$lib/components/routes/types/_models/types';
	import Page from "$lib/components/routes/types/Page.svelte";

	type Props = { data: CodesProps };
	const { data }: DeepGuard<Props> = $props();
</script>
<Page { ...data } />
