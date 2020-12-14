export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  reasonForContact: string;
  contactDate: string;
  phoneNumber?: string;
}

export function isContactForm(object: Object): object is ContactForm {
  return 'firstName' in object &&
        'lastName' in object &&
        'email' in object &&
        'reasonForContact' in object &&
        'contactDate' in object;
}
