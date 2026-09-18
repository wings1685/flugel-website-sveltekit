<script lang="ts">
	import type { ParagraphAttributes, DivAttributes } from "$lib/_global/types/components";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Paragraph.sass";

	type Props = (ParagraphAttributes & {
		as?: 'p';
	}) | (DivAttributes & {
		as: 'div';
	});

	const props: DeepGuard<Props> = $props();
</script>
{#if props.as === 'p'}
<p { ...props } class={[ 'paragraph', props.class ]}>
	{@render props.children?.() }
</p>
{:else}
<div { ...props } class={[ 'paragraph', props.class ]}>
	{@render props.children?.() }
</div>
{/if}
