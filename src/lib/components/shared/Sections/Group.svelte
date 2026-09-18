<script lang="ts">
	import { untrack } from "svelte";
	import type { Directions, DivAttributes, Sizes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Group.sass";

	type Props = DivAttributes & {
		direction?: Directions;
		marginSize?: Extract<Sizes, 'small' | 'medium' | 'large' | 'none'>;
	};
	const props: DeepGuard<Props> = $props();

	const { direction = 'center', marginSize = 'medium' } = untrack(() => props);
</script>
<div { ...props } class={[ `group direction_${direction} margin_size_${marginSize}`, props.class ]}>
	{@render props.children?.()}
</div>
