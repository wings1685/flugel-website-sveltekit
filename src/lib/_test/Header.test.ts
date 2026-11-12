import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import { render, cleanup, screen } from "@testing-library/svelte";
import { Header } from "#lib/components/shared/Sections/index.ts";

window.scrollTo = vi.fn();

// 1. テスト中に書き換えられるモック用の state を用意
const mockPage = vi.hoisted(() => ({
	url: new URL("http://localhost/"),
	params: {},
	route: { id: "/" },
	status: 200,
	error: null,
	data: {},
	state: {},
	form: undefined,
}));
// 2. $app/state の page をモック化（旧 $app/stores の場合はそちらをモック）
vi.mock("$app/state", () => ({
	page: mockPage,
}));

describe('Header コンポーネントのナビゲーションテスト', () => {
	beforeEach(() => {
		// テストごとに初期パス "/" へリセット
		mockPage.url = new URL("http://localhost/");
	});
	afterEach(() => {
		cleanup();
	});

	it('トップページ（/）のときの表示検証', () => {
		render(Header);

		// 3. 最初は "Home" に active クラスがついていることを確認
		const homeLink = screen.getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(true);
	});
	it('Types ページのとき active クラスが切り替わるか', async () => {
		mockPage.url = new URL("http://localhost/types");
		render(Header);

		// 4. 【検証】"Types" リンクに active クラスが付き、"Home" から外れたかを確認
		const homeLink = screen.getByRole('link', { name: /Home/i });
		expect(homeLink.classList.contains('active')).toBe(false);
		const typesLink = screen.getByRole('link', { name: /Types/i });
		expect(typesLink.classList.contains('active')).toBe(true);
	});
});
