import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginRight = new Generator({
	patterns: [
		/-?mr-[0-9\.\/]{1,}/,
		/-?mr-\[.*\]/,
		/mr-(auto|full|max|min|px|screen|fit)/,
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
				marginRight: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
