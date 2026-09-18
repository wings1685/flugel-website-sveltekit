<script lang="ts">
	import type { DivAttributes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Box.sass";

	const props: DeepGuard<DivAttributes> = $props();
</script>
<div { ...props } class={ `box ${props.class}` }>
	{@render props.children?.()}
</div>
