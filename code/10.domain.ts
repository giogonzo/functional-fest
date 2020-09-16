// Car rental form example
// - email
// - payment mode: at pickup or online (now)
// - age range
// - email is only required if paying "online"
// - at form submit, display the total price based on user input

// some basic types:

export type PaymentMode = "online" | "pickup";

export type AgeRange = "18-25" | "25-27" | "27+";

// type representing the current state of our form:

export type FormState = {
  email?: string;
  ageRange?: AgeRange;
  paymentMode?: PaymentMode;
};

// now, our API will only accept valid payloads
// when we try to submit this form
