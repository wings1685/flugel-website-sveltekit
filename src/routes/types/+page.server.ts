import { codes as codeDeepGuard } from '$lib/components/routes/types/_models/codeDeepGuard';
import { codes as codeProps } from '$lib/components/routes/types/_models/codeProps';
import { codes as codeExclude } from '$lib/components/routes/types/_models/codeExclude';
import { getHighlightedCode } from '$lib/components/features/Highlight/_models/usePage';
import { unescapeTag } from '$lib/_global/lib/utils';
import type { CodesProps } from '$lib/components/routes/types/_models/types';

export const load = async () => {
	const typesDeepGuard = await getHighlightedCode(codeDeepGuard.types);
	const glassDeepGuard = await getHighlightedCode(codeDeepGuard.glass);

	const iconProps = await getHighlightedCode(unescapeTag(codeProps.icon));
	const pageTitleProps = await getHighlightedCode(unescapeTag(codeProps.pageTitle));
	const typesProps = await getHighlightedCode(codeProps.types);
	const groupProps = await getHighlightedCode(codeProps.group);

	const glassExclude = await getHighlightedCode(unescapeTag(codeExclude.glass));

	const data: CodesProps = {
		deepGuard: {
			types: typesDeepGuard,
			glass: glassDeepGuard,
		},
		props: {
			icon: iconProps,
			pageTitle: pageTitleProps,
			types: typesProps,
			group: groupProps,
		},
		exclude: {
			glass: glassExclude,
		},
	};

	return data;
}
