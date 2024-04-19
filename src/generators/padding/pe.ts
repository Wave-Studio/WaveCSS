import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingInlineEnd = new Generator({
	patterns: [
		/pe-[0-9\.\/]{1,}/,
		/pe-(auto|full|max|min|px|screen|fit)/,
		/pe-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingInlineEnd: size,
			},
		};
	},
});
