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
	const imagePath = '/images/bg/';
	const getImagePc = (month?: Months) => month ? `${imagePath}${ month }.webp` : '';
	const getImageSp = (month?: Months) => month ? `${imagePath}${ month }_sp.webp` : '';
	const getSrcset = (month?: Months) => {
		if (import.meta.env.SSR || !month) return '';

		return window.innerWidth <= 750 ? getImageSp(month) : getImagePc(month);
	};

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
	<picture>
		<source media="(max-width: 750px)" srcset={ getImageSp(currentMonth) } />
		<img bind:this={ elBg } src={ getImagePc(currentMonth) } alt="" data-testid="bg" />
	</picture>
	{#if selectedMonth()}
		<img id="selected_bg" src={ getSrcset(selectedMonth()) } alt="" />
	{/if}
</div>
