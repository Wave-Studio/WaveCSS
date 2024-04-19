import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginInlineEnd = new Generator({
	patterns: [
		/-?me-[0-9\.\/]{1,}/,
		/-?me-\[.*\]/,
		/me-(auto|full|max|min|px|screen|fit)/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(
			pattern.startsWith("-")
				? pattern.substring(4)
				: pattern.substring(3),
		);

		return {
			class: pattern,
			styles: {
				marginInlineEnd: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
