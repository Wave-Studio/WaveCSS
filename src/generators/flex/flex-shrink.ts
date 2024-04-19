import { Generator } from "../../core/index.ts";

export const flexShrink = new Generator({
	patterns: [/flex-shrink/, /flex-shrink-0/, /flex-shrink-\[.*\]/],
	generator: (pattern) => {
		return {
			class: pattern,
			styles: {
				flexShrink: /^flex-shrink$/.test(pattern)
					? "1"
					: /^flex-shrink-0$/.test(pattern)
					? "0"
					: pattern.substring(
						pattern.indexOf("[") + 1,
						pattern.lastIndexOf("]"),
					),
			},
		};
	},
});
