<script lang="ts">
	import { Box } from "#lib/components/shared/Sections/index.ts";
	import { Paragraph } from "#lib/components/shared/Typography/index.ts";
	import { Highlight } from "#lib/components/features/index.ts";
	import type { CodesProps } from "../_models/types";
	import type { DeepGuard } from "#lib/_global/types/types.ts";

	type Props = CodesProps['deepGuard'];

	const props: DeepGuard<Props> = $props();
</script>
<Box>
	<Paragraph>再帰的に Readonly を付与する DeepGuard 型を、コンポーネントの props や読み込みの戻り値の際に使用しています。</Paragraph>
	<Highlight filename="types.ts" code={ props.types } />
	<Highlight filename="Glass.tsx" code={ props.glass } />
</Box>
