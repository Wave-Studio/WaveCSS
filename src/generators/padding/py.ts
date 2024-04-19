import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingY = new Generator({
	patterns: [
		/py-[0-9\.\/]{1,}/,
		/py-(auto|full|max|min|px|screen|fit)/,
		/py-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingTop: size,
				paddingBottom: size,
			},
		};
	},
});
