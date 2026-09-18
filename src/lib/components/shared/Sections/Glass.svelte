<script lang="ts">
	import { Section } from "./";
	import { Icon } from "../Utils";
	import type { AsDiv, AsSection, AsLink } from "$lib/_global/types/components";
	import type { ComponentProps } from "svelte";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Glass.sass";

	type IconProps = Pick<ComponentProps<typeof Icon>, 'type'>;
	type Props = {
		mini?: boolean;
		isDark?: boolean;
	} & ( | AsDiv | AsSection | ( AsLink & {
		href: string;
		icon?: IconProps['type'];
		target?: '_blank';
	}) );
	const props: DeepGuard<Props> = $props();
</script>
{#if props.as === 'a'}
	<a { ...props } class={[ 'glass mini is_dark', props.class ]}>
		{@render props.children?.()}
		{#if props.icon}
			<Icon type={ props.icon } />
		{/if}
	</a>
{:else if props.as === 'section'}
	<Section { ...props } class={[ 'glass', { mini: props.mini, is_dark: props.isDark }, props.class ]}>
		{@render props.children?.()}
	</Section>
{:else}
	<div { ...props } class={[ 'glass', { mini: props.mini, is_dark: props.isDark }, props.class ]}>
		{@render props.children?.()}
	</div>
{/if}
