import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const marginInlineStart = new Generator({
	patterns: [
		/-?ms-[0-9\.\/]{1,}/,
		/-?ms-\[.*\]/,
		/ms-(auto|full|max|min|px|screen|fit)/,
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
				marginInlineStart: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
