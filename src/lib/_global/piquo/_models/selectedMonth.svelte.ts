/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Months } from "$lib/_global/lib/shared";

type Store = Months | '';
const initialValue: Store = '';

export const _selectedMonth = {
	server: {
		selectedMonth: (): Months => initialValue,
		setSelectedMonth: (_: Months = '') => {},
	},
	client: () => {
		let selectedMonth = $state<Months>();
		const setSelectedMonth = (value?: Months) => { selectedMonth = value };

		return { selectedMonth: () => selectedMonth, setSelectedMonth };
	},
};
