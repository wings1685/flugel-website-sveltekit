<script lang="ts">
	import { onMount } from "svelte";
	import { flugel } from "$lib/_global/lib/shared";
	import { Glass, Group } from "./";

	let year = $state<number>(2026);

	onMount(() => {
		year = ((new Date()).getFullYear());
	});

</script>
<footer>
	<Group>
		<Glass mini>
			<p class="copyright">{ flugel } &copy; { year }</p>
		</Glass>
	</Group>
</footer>
