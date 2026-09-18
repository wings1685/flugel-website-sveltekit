<script lang="ts">
	import { onMount } from "svelte";
	import { months } from "$lib/_global/lib/shared";
	import { sleep } from "$lib/_global/lib/utils";
	import { useStore } from "$lib/_global/piquo";
	import type { Months } from "$lib/_global/lib/shared";
	import "./Bg.sass";

	let currentMonth = $state<Months>();
	const { selectedMonth, setSelectedMonth } = useStore('selectedMonth');

	let elBg: HTMLImageElement;
	const getSrcset = (month?: Months) => month ? `/images/bg/${ month }.webp 1920w, /images/bg/${ month }_sp.webp 768w` : '';

	onMount(() => {
		const month = months[(new Date()).getMonth()];
		currentMonth = month;
	});

	$effect(() => {
		const next = selectedMonth();

		if (!elBg || !next) return;

		if (!('computedStyleMap' in elBg)) {
			currentMonth = next;
			return;
		}

		const style = elBg.computedStyleMap();
		const duration = style.get('animation-duration') as CSSUnitValue;
		const delay = duration.value * 1000;

		const animated = async () => {
			await sleep(delay);

			currentMonth = next;
			setSelectedMonth();
		};
		animated();
	});
</script>
<div id="bg">
	<img bind:this={ elBg } alt="" srcset={ getSrcset(currentMonth) } data-testid="bg" />
	{#if selectedMonth()}
		<img id="selected_bg" srcset={ getSrcset(selectedMonth()) } alt="" />
	{/if}
</div>
