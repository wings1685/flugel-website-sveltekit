<script lang="ts">
	import { Archives, Experiments, Environment } from "./_parts";
	import SiteMeta from "../SiteMeta.svelte";
</script>
<main>
	<SiteMeta dir="/archives" />
	<Environment />
	<Experiments />
	<Archives />
</main>
