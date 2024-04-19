import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingX = new Generator({
	patterns: [
		/px-[0-9\.\/]{1,}/,
		/px-(auto|full|max|min|px|screen|fit)/,
		/px-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingLeft: size,
				paddingRight: size,
			},
		};
	},
});
