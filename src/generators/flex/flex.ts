import { Generator } from "../../core/index.ts";

export const flex = new Generator({
	patterns: [
		/flex/,
		/inline-flex/,
		/flex-(1|auto|initial|none)/,
		/flex-\[.*\]/,
	],
	generator: (pattern) => {
		if (/^(inline-)?flex$/.test(pattern)) {
			return {
				class: pattern,
				styles: {
					display: pattern,
				},
			};
		} else {
			let value = "";

			switch (pattern) {
				case "flex-1": {
					value = "1 1 0%";
					break;
				}
				case "flex-auto": {
					value = "1 1 auto";
					break;
				}
				case "flex-initial": {
					value = "0 1 auto";
					break;
				}
				case "flex-none": {
					value = "none";
					break;
				}

				default: {
					value = pattern.substring(
						pattern.indexOf("[") + 1,
						pattern.lastIndexOf("]"),
					);
					break;
				}
			}

			return {
				class: pattern,
				styles: {
					flex: value,
				},
			};
		}
	},
});
