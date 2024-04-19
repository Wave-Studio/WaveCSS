export const convertJSNameToHTML = (jsName: string) => {
	let output = "";

	for (const char of jsName) {
		if (char === char.toUpperCase()) {
			output += `-${char.toLowerCase()}`;
		} else {
			output += char;
		}
	}

	return output;
};
