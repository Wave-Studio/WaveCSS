export type SingleOrArray<T> = T | T[];

export type CSSOutput =
	| undefined
	| SingleOrArray<{
		class: string;
		styles: Partial<CSSStyleDeclaration>;
	}>;
