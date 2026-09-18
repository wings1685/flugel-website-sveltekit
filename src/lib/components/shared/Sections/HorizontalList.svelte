<script lang="ts">
	import type { UListAttributes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./HorizontalList.sass";

	const props: DeepGuard<UListAttributes> = $props();
</script>
<ul { ...props } class={[ 'horizontal_list', props.class ]}>
	{@render props.children?.()}
</ul>
