import { makeADT, ofType } from "@morphic-ts/adt";
import { OnlinePayment, PickupPayment } from "./12.sum";
import { pipe } from "fp-ts/function";

const ConfirmRent = makeADT("paymentMode")({
  online: ofType<OnlinePayment>(),
  pickup: ofType<PickupPayment>(),
});

// same as our `onlinePayment` constructor
const rentSubmit1 = ConfirmRent.of.online({
  email: "test@email.com",
  ageRange: "18-25",
});

export const confirmation = pipe(
  rentSubmit1,
  ConfirmRent.match({
    // `match` is the same as our custom `fold`
    online: ({ email }) =>
      `Payment confirmation sent to ${email}`,
    pickup: () => "You will pay at pickup",
  })
);
