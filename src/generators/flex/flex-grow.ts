import { Generator } from "../../core/index.ts";

export const flexGrow = new Generator({
	patterns: [/flex-grow/, /flex-grow-0/, /flex-grow-\[.*\]/],
	generator: (pattern) => {
		return {
			class: pattern,
			styles: {
				flexShrink: /^flex-grow$/.test(pattern)
					? "1"
					: /^flex-grow-0$/.test(pattern)
					? "0"
					: pattern.substring(
						pattern.indexOf("[") + 1,
						pattern.lastIndexOf("]"),
					),
			},
		};
	},
});
