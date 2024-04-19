import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingTop = new Generator({
	patterns: [
		/pt-[0-9\.\/]{1,}/,
		/pt-(auto|full|max|min|px|screen|fit)/,
		/pt-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingTop: size,
			},
		};
	},
});
