import { Generator } from "../../core/index.ts";

export const flexWrap = new Generator({
	patterns: [/flex-wrap/, /flex-wrap-reverse/, /flex-nowrap/],
	generator: (pattern) => {
		return {
			class: pattern,
			styles: {
				flexWrap: pattern.substring(5),
			},
		};
	},
});
