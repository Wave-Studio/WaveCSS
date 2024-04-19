import { Generator } from "../core/index.ts";
import { getSizeFromString } from "../utils/index.ts";

export const height = new Generator({
	patterns: [
		/-?h-[0-9\.\/]{1,}/,
		/-?h-\[.*\]/,
		/h-(auto|full|max|min|px|screen|fit)/,
		/h-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(
			pattern.startsWith("-")
				? pattern.substring(3)
				: pattern.substring(2),
		);

		return {
			class: pattern,
			styles: {
				height: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
