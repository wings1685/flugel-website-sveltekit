import type { HTMLAttributes } from "svelte/elements";

export type DivAttributes = HTMLAttributes<HTMLDivElement>;
export type AsDiv = DivAttributes & {
	as?: 'div';
};
export type SectionAttributes = HTMLAttributes<HTMLElement>;
export type AsSection = SectionAttributes & {
	as: 'section';
};

export type LinkAttributes = HTMLAttributes<HTMLAnchorElement>;
export type AsLink = LinkAttributes & {
	as: 'a';
};

export type HAttributes = HTMLAttributes<HTMLHeadingElement>;

export type ParagraphAttributes = HTMLAttributes<HTMLParagraphElement>;

export type UListAttributes = HTMLAttributes<HTMLUListElement>;

export type Sizes = 'small' | 'medium' | 'large' | 'extrasmall' | 'extralarge' | 'none';
export type Directions = 'left' | 'center' | 'right' | 'justify';
