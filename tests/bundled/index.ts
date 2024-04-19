import { bundle } from "https://deno.land/x/emit@0.38.2/mod.ts";
import { minify } from "npm:terser";

const code = await bundle("./src/index.ts", {
	compilerOptions: {
		inlineSourceMap: false,
		inlineSources: false,
		sourceMap: false,
	},
});

await Deno.mkdir("./tests/bundled/dist", { recursive: true });

await Deno.writeTextFile("./tests/bundled/dist/bundled.js", code.code!);

const minifiedCode = await minify(code.code);

await Deno.writeTextFile(
	"./tests/bundled/dist/minified.js",
	minifiedCode.code!,
);

console.log("Done!");
