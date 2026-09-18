<script lang="ts">
	import { Glass, Group } from "$lib/components/shared/Sections";
	import { PageTitle, Paragraph } from "$lib/components/shared/Typography";
</script>
<main>
	<Glass as="section">
		<PageTitle icon="home">404 Not Found</PageTitle>
		<Paragraph>お探しのページは存在しないか、移動された可能性があります。</Paragraph>
		<Group>
			<Glass as="a" href="/" icon="arrow" isDark>Home</Glass>
		</Group>
	</Glass>
</main>
