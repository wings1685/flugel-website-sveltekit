<script lang="ts">
	import { Footer, Header, Nav } from "#lib/components/shared/Sections/index.ts";
	import { Bg } from "#lib/components/shared/Utils/index.ts";

	import type { Snippet } from "svelte";

	import "#lib/_global/styles/global.sass";

	type Props = {
		children: Snippet;
	}
	const { children }: Props = $props();
</script>
<Header />
{@render children()}
<Nav />
<Footer />
<Bg />
