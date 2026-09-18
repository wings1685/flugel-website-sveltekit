<script lang="ts">
	import type { DeepGuard } from "$lib/_global/types/types";

	import "./Highlight.sass";

	type Props = {
		code: string;
		filename?: string;
	};
	const { code, filename }: DeepGuard<Props> = $props();
</script>
<div class="code_highlight">
{#if filename}
	<p class="filename monospace">{ filename }</p>
{/if}
	<div class="shiki_wrapper">
		{@html code}
	</div>
</div>
