import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingRight = new Generator({
	patterns: [
		/pr-[0-9\.\/]{1,}/,
		/pr-(auto|full|max|min|px|screen|fit)/,
		/pr-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingRight: size,
			},
		};
	},
});
