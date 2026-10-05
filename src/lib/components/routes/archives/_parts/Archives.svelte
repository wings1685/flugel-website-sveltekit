<script lang="ts">
	import { sites } from "../_models/usePage";
	import { Glass, HorizontalList, VerticalList } from "#lib/components/shared/Sections/index.ts";
	import { PageTitle, Paragraph } from "#lib/components/shared/Typography/index.ts";
	import "./Archives.sass";
</script>
<Glass as="section">
	<PageTitle icon="folder">構築一覧</PageTitle>
	<VerticalList>
		{#each sites as site}
			<li>
				<Paragraph class="archives_paragraph">{ site.description }</Paragraph>
				<HorizontalList class="monospace">
					{#each site.stacks as stack}
						<li>{ stack }</li>
					{/each}
				</HorizontalList>
			</li>
		{/each}
	</VerticalList>
</Glass>
