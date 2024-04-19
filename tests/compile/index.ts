import { getCssClasses } from "../../oldsrc/utils/parser.ts";
import { generateStyles, generateStylesheet } from "../../src/index.ts";

const classes = getCssClasses(
	await Deno.readTextFile("./tests/compile/test.html"),
);
const generatedStyles = generateStyles(classes);

await Deno.writeTextFile(
	"./tests/compile/missingClassList.txt",
	generatedStyles.noOutputClasses.sort().join("\n"),
);

const generated = generateStylesheet(generatedStyles);

await Deno.writeTextFile("./tests/compile/test.css", generated);
