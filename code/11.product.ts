import { AgeRange, PaymentMode } from "./10.domain";

// Car rental form submit rules
// - payment mode is required
// - age range is required
// - email is only required if paying "online"

// Confirm rent API will complain if the form values
// are not sent as expected

// Let's define the type of the payload to send to the API:

export type ConfirmRent = {
  ageRange: AgeRange;
  paymentMode: PaymentMode;
  email?: string;
};

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
  paymentMode: "pickup",
  ageRange: "18-25",
  email: "test@example.com", // this should not be here
};

// even worse, this value is representable
// but it is missing the required field `email`:

export const payload4: ConfirmRent = {
  paymentMode: "online",
  ageRange: "18-25",
};

// What we defined here
// is usually referred to as a "Product type"
// (intuitively: the # of representable values is the product
// of representable values of each field)

// In this case, it allows to represent also
// some "impossible" states
// (states that should not be possible in our domain)
