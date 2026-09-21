<script lang="ts">
	import { experiments } from "../_models/usePage";
	import { Glass, HorizontalList, VerticalList } from "$lib/components/shared/Sections";
	import { PageTitle, Paragraph } from "$lib/components/shared/Typography";
	import "./Archives.sass";
</script>
<Glass as="section">
	<PageTitle icon="folder">実験一覧</PageTitle>
	<VerticalList>
		{#each experiments as experiment}
			<li>
				<Paragraph class="archives_paragraph">{ experiment.description }</Paragraph>
				<HorizontalList class="monospace">
					{#each experiment.stacks as stack}
						<li>{ stack }</li>
					{/each}
				</HorizontalList>
			</li>
		{/each}
	</VerticalList>
</Glass>
