export const escapeCssClassName = (className: string) => {
	return className
		.replace(/\[/g, "\\[")
		.replace(/\]/g, "\\]")
		.replace(/\(/g, "\\(")
		.replace(/\)/g, "\\)")
		.replace(/\{/g, "\\{")
		.replace(/\}/g, "\\}")
		.replace(/\:/g, "\\:")
		.replace(/@/g, "\\@")
		.replace(/\#/g, "\\#")
		.replace(/\./g, "\\.")
		.replace(/\,/g, "\\,")
		.replace(/\_/g, "\\_")
		.replace(/\%/g, "\\%")
		.replace(/\+/g, "\\+")
		.replace(/\//g, "\\/");
};

export const escapeArbitraryCss = (css: string) => {
	return css.replace(/_/g, " ");
};
