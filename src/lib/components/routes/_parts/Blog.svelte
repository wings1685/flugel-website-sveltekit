<script lang="ts">
	import { onMount } from "svelte";
	import { fetchEntries } from "../_models/usePage";
	import { Glass, VerticalList } from "$lib/components/shared/Sections";
	import { PageTitle, Paragraph } from "$lib/components/shared/Typography";
	import type { BlogEntries, BlogEntry } from "../_models/schema";
	import type { DeepGuard } from "$lib/_global/types/types";
	import "./Blog.sass";

	let entries = $state<DeepGuard<BlogEntry[]>>([...Array(5)].map((_, i) => ({
		title: '**********',
		link: '',
		published: '2026-01-01 00:00:00',
		summary: "********** ********** ********** ********** ********** ********** ********** ********** ********** ********** ********** **********",
	})));

	const formatDate = (published: BlogEntries[number]['published']) => (new Date(published)).toLocaleDateString('ja-JP', {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});

	onMount(() => {
		const getEntries = async () => {
			entries = await fetchEntries();
		};
		getEntries();
	});
</script>
<Glass as="section">
	<PageTitle icon="rss">記事</PageTitle>
	<VerticalList id="blog_entries">
	{#each entries as entry}
		<li>
			<article>
				<Glass as="a" href={ entry.link } icon="tab" isDark target="_blank">
					<p>{ entry.title }</p>
				</Glass>
				<span class="published">{ formatDate(entry.published )}</span>
				<Paragraph class="summary">{ entry.summary }</Paragraph>
			</article>
		</li>
	{/each}
	</VerticalList>
</Glass>
