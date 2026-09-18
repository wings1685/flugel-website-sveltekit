<script lang="ts">
	import { PageMeta } from "$lib/components/shared/Utils";
	import { DeepGuard as DeepGuardCodes, Exclude, Props } from "./_parts";
	import { Box, Glass } from "$lib/components/shared/Sections";
	import { PageTitle, Paragraph } from "$lib/components/shared/Typography";
	import type { CodesProps } from "./_models/types";
	import type { DeepGuard } from "$lib/_global/types/types";

	const props: DeepGuard<CodesProps> = $props();
</script>
<main>
	<PageMeta title="Types" />
	<Glass as="section">
		<Box>
			<PageTitle icon="code">型の制御例</PageTitle>
			<Paragraph>
				フロントエンドのフレームワークを使用した型の制御においては、以下のような方法を採用しています。<br />
				以下は、本サイト内でのソースの一例をご案内します。
			</Paragraph>
		</Box>
		<DeepGuardCodes { ...props.deepGuard } />
		<Props { ...props.props } />
		<Exclude { ...props.exclude } />
	</Glass>
</main>
