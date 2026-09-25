# flugel.biz SvelteKit Version

稼働している自分自身の SolidStart 製屋号サイトを、SvelteKit へリプレイスした実験リポジトリです。

**Note:** 本リポジトリは、実験場という性質であるため Issues 及び Pull Requests は受け付けておりません。

## Tech Stack

- SvelteKit 2.70.3 (SSG)
- TypeScript
- Sass
- ky
- Valibot
- Shiki

## Replaced Features

- SolidStart から SvelteKit への翻訳（JSX → Svelte テンプレート、Signal → Runes）
- Meta 生成機構を SvelteKit に合わせた上で適用（Solid JSX → Svelte テンプレート）
- Shiki コードの色付け実行を +page.server.ts でビルド時に生成、クライアント時の実行なし

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)
- [Next.js 版](https://github.com/wings1685/flugel-website-next)
- [Nuxt 版](https://github.com/wings1685/flugel-website-nuxt)
- [Astro + Solid / Svelte / Vue 版](https://github.com/wings1685/flugel-website-astro)
- [Astro + React 版](https://github.com/wings1685/flugel-website-astro-react)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)
- [Meta 生成機構祭](https://wings.hatenablog.com/entry/metaFestival)

## Folder Map

```
src/
├─ lib/
│ ├─ _global/
│ │ ├─ lib/
│ │ ├─ piquo/
│ │ ├─ styles/
│ │ ├─ types/
│ ├─ components/
│ │ ├─ features/
│ │ │ ├─ Highlight/
│ │ │ │ ├─ _models/
│ │ ├─ routes/
│ │ │ ├─ _models/
│ │ │ ├─ _parts/
│ │ │ ├─ archives/
│ │ │ │ ├─ _models/
│ │ │ │ ├─ _parts/
│ │ │ ├─ types/
│ │ │ │ ├─ _models/
│ │ │ │ ├─ _parts/
│ │ ├─ shared/
│ │ │ ├─ Sections/
│ │ │ ├─ Typography/
│ │ │ ├─ Utils/
├─ routes/
│ ├─ archives/
│ ├─ types/
```
