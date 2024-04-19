import { Generator } from "../core/index.ts";
import { getSizeFromString } from "../utils/index.ts";

export const width = new Generator({
	patterns: [
		/-?w-[0-9\.\/]{1,}/,
		/-?w-\[.*\]/,
		/w-(auto|full|max|min|px|screen|fit)/,
		/w-\[.*\]/,
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
				width: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
