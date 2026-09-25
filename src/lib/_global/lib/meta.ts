import * as v from "valibot";
import type { DeepGuard } from "../types/types";

const MetaSchema = v.object({
	title: v.string(),
	description: v.optional(v.string()),
	ogImage: v.optional(v.string()),
});
export type SiteMeta = v.InferOutput<typeof MetaSchema>;
type PageMeta = Partial<SiteMeta>;
export type MetaData = SiteMeta & {
	siteTitle: string,
};

export type YamlFiles = Record<string, {
	default: SiteMeta;
}>;
type MetaInfo = Omit<MetaData, 'title'> & {
	titles: string[];
};

export type MetaProps = {
	dir?: string;
	meta?: PageMeta;
};
type Props = MetaProps & {
	globData: YamlFiles;
};

const separator = ' | ';
const convertDirectoryArray = (dir: string) => {
	const dirs = dir.split('/');

	return dirs.map(path => path ? `${path}/` : path);
};

export const buildMeta = (props: DeepGuard<Props>): MetaData => {
	const { dir = '/', globData } = props;
	const metaData: MetaInfo = { titles: [], description: '', ogImage: '', siteTitle: '' };

	const pagePaths = convertDirectoryArray(dir);
	const pagePath = pagePaths.slice(-1)[0];
	const globPaths = Object.keys(globData);

	const setMeta = (data?: PageMeta, canOverrideTitle: boolean = true) => {
		if (!data) return;

		if (data.title && canOverrideTitle) metaData.titles = [ data.title, ...metaData.titles];
		if (data.title && !metaData.siteTitle) metaData.siteTitle = data.title;
		if (data.description) metaData.description = data.description;
		if (data.ogImage) metaData.ogImage = data.ogImage;
	};

	Object.values(pagePaths).forEach(path => {
		const yamlPath = `./${path}_data/meta.yaml`;
		if (!globPaths.includes(yamlPath)) return;

		const data = globData[yamlPath].default;
		v.parse(MetaSchema, data);

		const canOverrideTitle = !props.meta?.title || path !== pagePath;
		setMeta(data, canOverrideTitle);
	});
	setMeta(props.meta);

	const data: MetaData = {
		title: metaData.titles.join(separator),
		description: metaData.description,
		ogImage: metaData.ogImage,
		siteTitle: metaData.siteTitle,
	};

	return data;
};
