import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const paddingBottom = new Generator({
	patterns: [
		/pb-[0-9\.\/]{1,}/,
		/pb-(auto|full|max|min|px|screen|fit)/,
		/pb-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(3));

		return {
			class: pattern,
			styles: {
				paddingBottom: size,
			},
		};
	},
});
