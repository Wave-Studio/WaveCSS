import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginBottom = new Generator({
	patterns: [
		/-?mb-[0-9\.\/]{1,}/,
		/-?mb-\[.*\]/,
		/mb-(auto|full|max|min|px|screen|fit)/,
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
				marginBottom: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
