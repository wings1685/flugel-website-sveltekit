<script lang="ts">
	import { Box } from "#lib/components/shared/Sections/index.ts";
	import { Paragraph } from "#lib/components/shared/Typography/index.ts";
	import { Highlight } from "#lib/components/features/index.ts";
	import type { CodesProps } from "../_models/types";
	import type { DeepGuard } from "#lib/_global/types/types.ts";

	type Props = CodesProps['props'];

	const props: DeepGuard<Props> = $props();
</script>
<Box>
	<Paragraph>
		A コンポーネントを B コンポーネントから呼ぶ際、A コンポーネントの props を継承し、型定義がズレないようにしています。<br />
		また、サイズや色などは共通の型定義に全てユニオン型で定義し、コンポーネントなどで使用する際は Extract や Exclude で絞り、同じ定義を作らないようにしています。
	</Paragraph>
	<Highlight filename="Icon.tsx" code={ props.icon } />
	<Highlight filename="PageTitle.tsx" code={ props.pageTitle } />
	<Highlight filename="types.ts" code={ props.types } />
	<Highlight filename="Group.tsx" code={ props.group } />
</Box>
