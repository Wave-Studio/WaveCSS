import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const gapY = new Generator({
	patterns: [
		/gap-y-[0-9\.\/]{1,}/,
		/gap-y-(px)/,
		/gap-y-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(6));

		return {
			class: pattern,
			styles: {
				rowGap: size,
			},
		};
	},
});
