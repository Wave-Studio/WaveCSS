import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const padding = new Generator({
	patterns: [
		/p-[0-9\.\/]{1,}/,
		/p-(auto|full|max|min|px|screen|fit)/,
		/p-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(2));

		return {
			class: pattern,
			styles: {
				padding: size,
			},
		};
	},
});
