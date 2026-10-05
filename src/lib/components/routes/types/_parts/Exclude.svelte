<script lang="ts">
	import { Box } from "#lib/components/shared/Sections/index.ts";
	import { Paragraph } from "#lib/components/shared/Typography/index.ts";
	import { Highlight } from "#lib/components/features/index.ts";
	import type { CodesProps } from "../_models/types";
	import type { DeepGuard } from "#lib/_global/types/types.ts";

	type Props = CodesProps['exclude'];

	const props: DeepGuard<Props> = $props();
</script>
<Box>
	<Paragraph>コンポーネントが div や a など複数の要素で展開する際は、div を指定する場合は href を渡さないよう、逆に a を指定する場合は href が必須であるような、排他的型制御を行っています。</Paragraph>
	<Highlight filename="Glass.tsx" code={ props.glass } />
</Box>
