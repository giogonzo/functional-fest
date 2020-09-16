import { AgeRange } from "./10.domain";

export type OnlinePayment = {
  paymentMode: "online";
  ageRange: AgeRange;
  email: string;
};

export type PickupPayment = {
  paymentMode: "pickup";
  ageRange: AgeRange;
};

export type ConfirmRent = OnlinePayment | PickupPayment;

// A few possible payloads:

export const payload1: ConfirmRent = {
  paymentMode: "pickup",
  ageRange: "18-25",
};

export const payload2: ConfirmRent = {
  paymentMode: "online",
  ageRange: "18-25",
  email: "test@example.com",
};

export const payload3: ConfirmRent = {
  ageRange: "18-25",
  paymentMode: "pickup",
  // email: "test@example.com", // correctly errors now
};

export const payload4: ConfirmRent = {
  ageRange: "18-25",
  paymentMode: "online",
  email: "test@example.com", // if removed, correctly errors now
};

// The new type can still represent infinite
// possible values (considering email: string "infinite")
// but it removes by design all of the impossible
// cases that were representable using the Product version.

// What we defined here is usually referred to as a "Sum type"
// (intuitively: the # of representable values is the sum
// of representable values of each case)

// In TS it is encoded as a "discriminated union"
// (see https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions)
// In our example, `paymentMode` is the discriminating field
