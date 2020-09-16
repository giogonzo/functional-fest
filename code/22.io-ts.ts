import { FormState } from "./10.domain";
import { ConfirmRent } from "./12.sum";
import { totalPrice } from "./20.validate";
import { pipe } from "fp-ts/function";
import * as option from "fp-ts/Option";
import * as D from "io-ts/Decoder";

// Define an io-ts Decoder for `ConfirmRent`

export const AgeRange = D.literal("18-25", "25-27", "27+");
export const OnlinePayment = D.type({
  paymentMode: D.literal("online"),
  ageRange: AgeRange,
  email: D.string,
});
export const PickupPayment = D.type({
  paymentMode: D.literal("pickup"),
  ageRange: AgeRange,
});
const ConfirmRent = D.union(OnlinePayment, PickupPayment);

// Let's revise the implementation to use the new io-ts Decoder

export function parseFormState(
  formState: FormState
): option.Option<ConfirmRent> {
  return pipe(
    formState,
    ConfirmRent.decode,
    option.fromEither
  );
}

// Our "render total price" function stays the same:

function renderTotal(formState: FormState): string {
  return pipe(
    formState,
    parseFormState,
    option.map(totalPrice),
    option.fold(
      () => "Please fill out the form completely",
      p => `Total is ${p}€`
    )
  );
}

declare const formState: FormState;

export const renderedTotal = pipe(formState, renderTotal);
