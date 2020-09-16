import { double, length } from "./00.truth-or-lie";
import { pipe, flow } from "fp-ts/function";

export const result0 = length(double("foo"));

//
//
//
//
// using the `|>` operator:

// const result1 = "foo" |> double |> length

//
//
//
// using `pipe`:

export const result1 = pipe("foo", double, length);

//
//
//
// same using `flow`:

const doubleLength = flow(double, length);

export const result2 = doubleLength("foo");
