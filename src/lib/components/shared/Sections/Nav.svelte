<script lang="ts">
	import { monthData } from "$lib/_global/lib/shared";
	import { useStore } from "$lib/_global/piquo";
	import { Glass } from "./";
	import type { Months } from "$lib/_global/lib/shared";
	import "./Nav.sass";

	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	const handleClick = (e: Event, key: Months) => {
		e.preventDefault();

		if (selectedMonth()) return;

		setSelectedMonth(key);
	};
</script>
<nav class="wrapper">
	{#each Object.entries(monthData) as [key, name]}
		<Glass as="div" mini isDark onclick={ (e) => handleClick(e, key) } class="btn_nav">{ name }</Glass>
	{/each}
</nav>
