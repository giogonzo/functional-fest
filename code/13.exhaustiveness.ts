import { ConfirmRent } from "./12.sum";

export function renderConfirmation(
  rentSubmit: ConfirmRent
): string {
  switch (rentSubmit.paymentMode) {
    case "online":
      return `Payment confirmation sent to ${rentSubmit.email}`;
    case "pickup":
      return "You will pay at pickup";
  }
}

// Omitting a possible case, as well as
// providing impossible cases, will raise an error

// Useful especially when refactoring:
// TS will tell us where and what to change

// For the exhaustiveness check to work correctly,
// we must provide a return type annotation
