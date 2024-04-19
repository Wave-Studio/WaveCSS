import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginTop = new Generator({
	patterns: [
		/-?mt-[0-9\.\/]{1,}/,
		/-?mt-\[.*\]/,
		/mt-(auto|full|max|min|px|screen|fit)/,
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
				marginTop: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
