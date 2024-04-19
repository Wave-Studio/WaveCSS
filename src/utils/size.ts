import { sizes } from "../consts/index.ts";

export const getSizeFromString = (
	size: string,
	customSizes: Record<string, string> = {},
	replaceDefault = false,
) => {
	if (/\[.*\]/.test(size)) {
		size = size.replace("[", "").replace("]", "");
	} else {
		if (Object.hasOwn(sizes, size) && !replaceDefault) {
			size = sizes[size as keyof typeof sizes];
		} else {
			if (Object.hasOwn(customSizes, size)) {
				size = customSizes[size];
			} else {
				return;
			}
		}
	}

	return size;
};
