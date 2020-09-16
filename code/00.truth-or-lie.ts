// 2. annotate function return types
// 3. define total functions
// 4. when possible, prefer polymorphic functions
// 5. use "type-driven dev": `declare function`

// Can we implement it?

export declare function head<A>(as: Array<A>): A;

// TS does not complain: we must be OK
// (TS 4.1 will add an option for this, see https://github.com/microsoft/TypeScript/issues/13778)

// export function head<A>(as: Array<A>): A {
//   return as[0];
// }

// A safer version would be:

// export function head<A>(as: Array<A>): A | undefined {
//   return as[0];
// }

// Can we implement it?

export declare function length(a: string): number;

// Can we implement it?

export declare function double(a: string): string;

// Can we implement it?

export declare function parseInt(a: string): number;
