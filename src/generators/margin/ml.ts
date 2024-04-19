import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginLeft = new Generator({
	patterns: [
		/-?ml-[0-9\.\/]{1,}/,
		/-?ml-\[.*\]/,
		/ml-(auto|full|max|min|px|screen|fit)/,
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
				marginLeft: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
