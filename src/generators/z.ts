import { Generator } from "../core/index.ts";
import { getSizeFromString } from "../utils/index.ts";

export const zIndex = new Generator({
	patterns: [
		/-?z-[0-9\.\/]{1,}/,
		/-?z-\[.*\]/,
		/z-(auto|full|max|min|px|screen|fit)/,
	],
	generator: (pattern) => {
		const size = getSizeFromString(
			pattern.startsWith("-")
				? pattern.substring(3)
				: pattern.substring(2),
			{
				"0": "0",
				"10": "10",
				"20": "20",
				"30": "30",
				"40": "40",
				"50": "50",
			},
			true,
		);

		return {
			class: pattern,
			styles: {
				zIndex: pattern.startsWith("-") ? `-${size}` : size,
			},
		};
	},
});
