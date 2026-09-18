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
- Shiki コードの色付け実行を +page.server.ts でビルド時に生成

## Replaced Festival Repositories

- [SolidStart 版](https://github.com/wings1685/flugel-website)
- [Qwik 版](https://github.com/wings1685/flugel-website-qwik)

## Related Articles

- [同一サイトの 9 フレームワークパターンでのリプレイス祭](https://wings.hatenablog.com/entry/replaceFestival)

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
