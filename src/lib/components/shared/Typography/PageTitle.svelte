<script lang="ts">
	import { Icon } from "../Utils";
	import type { DeepGuard } from "$lib/_global/types/types";
	import type { HAttributes } from "$lib/_global/types/components";
	import type { ComponentProps } from "svelte";
	import "./PageTitle.sass";

	type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
	type Props = HAttributes & {
		icon: IconProps['type'];
	};
	const props: DeepGuard<Props> = $props();
</script>
<h1 class="page_title">
	<Icon type={ props.icon } />
	<span>
		{@render props.children?.() }
	</span>
</h1>
