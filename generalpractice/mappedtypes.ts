// Mapped types allow the use of an interface to transform keys into values

// A way to get to an interfaces keys to the types assosciated with the keys
// A benefit to this defining this type is that you can update the Interface to add new objects that you may want to add later.

import { HasEmail, HasPhoneNumber } from "../contactinfo/contactinfo";

interface CommunicationMethods {
  email: HasEmail;
  phone: HasPhoneNumber;
  fax: { fax: number };
  countryCode: { countryCode: number };
}

function contact<K extends keyof CommunicationMethods>(
  method: K,
  contact: CommunicationMethods[K] // turning the key into the value
) {}

contact("email", { name: "foo", email: "Email@gmail.com" });
contact("phone", { name: "foo", phone: 1233435593 });
contact("countryCode", { countryCode: 98757 });

// Access to the values by mapping through the keys
type allCommsKeys = keyof CommunicationMethods;
type AllCommValues = CommunicationMethods[keyof CommunicationMethods];
