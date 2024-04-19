import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const gapX = new Generator({
	patterns: [
		/gap-x-[0-9\.\/]{1,}/,
		/gap-x-(px)/,
		/gap-x-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(6));

		return {
			class: pattern,
			styles: {
				columnGap: size,
			},
		};
	},
});
