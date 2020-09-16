import { FormState } from "./10.domain";
import { ConfirmRent } from "./12.sum";
import { pipe } from "fp-ts/function";
import {
  onlinePayment,
  pickupPayment,
} from "./16.constructors";

// Car rental form example
// - email
// - payment mode: at pickup or online (now)
// - age range
// - email is only required if paying "online"
// - at form submit, display the total price based on user input

// Let's define a validation function for the form

declare function isFormValid(formState: FormState): boolean;

// and also a function to compute the total price

export declare function totalPrice(
  confirmRent: ConfirmRent
): number;

// Let's implement our "render total price" function
// with what we have up to now
function renderTotal(formState: FormState): string {
  if (isFormValid(formState)) {
    // we can display the total price
    const confirmRent =
      formState.paymentMode === "online"
        ? onlinePayment({
            ageRange: formState.ageRange!, // forced to cast
            email: formState.email!, // forced to cast
          })
        : pickupPayment({
            ageRange: formState.ageRange!, // forced to cast
          });

    return `Total is ${totalPrice(confirmRent)}€`;
  } else {
    // nope, just render an error message
    return "Please fill out the form";
  }
}

declare const formState: FormState;

export const renderedTotal = pipe(formState, renderTotal);
