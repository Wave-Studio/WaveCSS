import { CSSOutput } from "../types/index.ts";

export class Generator {
	public readonly patterns: RegExp[];
	public readonly generator: (pattern: string) => CSSOutput;

	constructor({
		patterns,
		generator,
	}: {
		/** use [] for variables syntax */
		patterns: RegExp[];
		generator: (pattern: string) => CSSOutput;
	}) {
		this.patterns = patterns;
		this.generator = generator;
	}
}
