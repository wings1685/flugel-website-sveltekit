/* eslint-disable @typescript-eslint/no-unused-vars */
type Store = boolean;
const initialValue: Store = false;

export const _navOpened = {
	server: {
		navOpened: (): Store => initialValue,
		setNavOpened: (_: Store) => {},
	},
	client: () => {
		let navOpened = $state<Store>(initialValue);
		const setNavOpened = (value: Store) => { navOpened = value };

		return { navOpened: () => navOpened, setNavOpened };
	},
};
