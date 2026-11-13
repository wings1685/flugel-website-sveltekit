import { describe, it, expect, afterEach } from "vitest";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/svelte";
import { useStore } from "#lib/_global/piquo/index.ts";
import { monthData } from "#lib/_global/lib/shared.ts";
import NavTest from "./NavTest.svelte";

describe('Nav コンポーネントと Bg コンポーネントの月変更連動テスト', () => {
	afterEach(() => {
		cleanup();
	});

	it('リンクを押したら月表示が変わるか', async () => {
		const { getAllByTestId, getByTestId } = render(NavTest);

		// 1. Nav コンポーネントのリンクが 12 か月分生成されているか確認
		const links = getAllByTestId('btnNav');
		expect(links.length).toBe(12);

		// 2. Nav コンポーネントの現在月の次の月を押して Store が切り替わるか確認
		const month = new Date().getMonth();
		const nextMonth = month === 12 ? 1 : month + 1;
		const nextMonthString = Object.keys(monthData)[nextMonth];

		fireEvent.click(links[nextMonth]);
		await waitFor(() => {
			const { selectedMonth } = useStore('selectedMonth');

			expect(selectedMonth()).toBe(nextMonthString);
		}, { timeout: 100 });

		// 3. Bg コンポーネントで srcset に切り替わった月の画像が入ったか確認
		await waitFor(() => {
			const bg = getByTestId('bg');
			const regexp = new RegExp(`${nextMonthString}.webp`);
			expect(bg.getAttribute('src')).toMatch(regexp);
		}, { timeout: 100 });
	});
});
