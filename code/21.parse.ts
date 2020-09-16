import { FormState } from "./10.domain";
import { ConfirmRent } from "./12.sum";
import { totalPrice } from "./20.validate";
import { pipe } from "fp-ts/function";
import {
  onlinePayment,
  pickupPayment,
} from "./16.constructors";
import * as option from "fp-ts/Option";

// Let's revise the signature of our "validation" function,
// and make it a "parser" instead

function parseFormState(
  formState: FormState
): option.Option<ConfirmRent> {
  if (
    formState.ageRange != null &&
    formState.paymentMode != null
  ) {
    switch (formState.paymentMode) {
      case "online":
        return formState.email != null
          ? option.some(
              onlinePayment({
                ageRange: formState.ageRange,
                email: formState.email,
              })
            )
          : option.none;
      case "pickup":
        option.some(
          pickupPayment({
            ageRange: formState.ageRange,
          })
        );
    }
  }

  return option.none;
}

// Let's implement our "render total price" function again
// (no casts needed this time!)

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
