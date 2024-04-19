import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginX = new Generator({
	patterns: [
		/-?mx-[0-9\.\/]{1,}/,
		/-?mx-\[.*\]/,
		/mx-(auto|full|max|min|px|screen|fit)/,
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
				marginLeft: pattern.startsWith("-") ? `-${size}` : size,
				marginRight: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
