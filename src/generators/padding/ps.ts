import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingInlineStart = new Generator({
	patterns: [
		/ps-[0-9\.\/]{1,}/,
		/ps-(auto|full|max|min|px|screen|fit)/,
		/ps-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingInlineStart: size,
			},
		};
	},
});
