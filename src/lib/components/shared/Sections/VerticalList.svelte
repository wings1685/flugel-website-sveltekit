<script lang="ts">
	import type { UListAttributes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./VerticalList.sass";

	const props: DeepGuard<UListAttributes> = $props();
</script>
<ul { ...props } class={[ 'vertical_list', props.class ]}>
	{@render props.children?.()}
</ul>
