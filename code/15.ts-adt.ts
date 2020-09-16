import { ADT, match } from "ts-adt";
import { AgeRange } from "./10.domain";
import { pipe } from "fp-ts/function";

type ConfirmRent = ADT<{
  online: { ageRange: AgeRange; email: string };
  pickup: { ageRange: AgeRange };
}>;

declare const rentSubmit1: ConfirmRent;

export const confirmation = pipe(
  rentSubmit1,
  match({
    // `match` is the same as our custom `fold`
    online: ({ email }) =>
      `Payment confirmation sent to ${email}`,
    pickup: () => "You will pay at pickup",
  })
);
