import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const margin = new Generator({
	patterns: [
		/-?m-[0-9\.\/]{1,}/,
		/-?m-\[.*\]/,
		/m-(auto|full|max|min|px|screen|fit)/,
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
				margin: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
