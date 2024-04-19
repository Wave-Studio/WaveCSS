import { Generator } from "../../core/index.ts";
import { getSizeFromString } from "../../utils/index.ts";

export const gap = new Generator({
	patterns: [
		/gap-[0-9\.\/]{1,}/,
		/gap-(px)/,
		/gap-\[.*\]/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(pattern.substring(4));

		return {
			class: pattern,
			styles: {
				gap: size,
			},
		};
	},
});
