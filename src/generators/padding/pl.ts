import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingLeft = new Generator({
	patterns: [
		/pl-[0-9\.\/]{1,}/,
		/pl-(auto|full|max|min|px|screen|fit)/,
		/pl-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingLeft: size,
			},
		};
	},
});
