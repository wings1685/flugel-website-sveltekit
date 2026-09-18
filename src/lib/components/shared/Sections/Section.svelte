<script lang="ts">
	import type { SectionAttributes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Section.sass";

	const props: DeepGuard<SectionAttributes> = $props();
</script>
<section { ...props } class={[ 'section', props.class ]}>
	{@render props.children?.()}
</section>
