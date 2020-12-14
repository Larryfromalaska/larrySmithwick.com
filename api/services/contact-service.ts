import { DynamoDB } from 'aws-sdk';
import { ContactForm } from '../models/contact-form';

export class ContactFormService {
    private db: DynamoDB;

    public constructor() {
        this.db = new DynamoDB({ 
            endpoint: process.env.BaseUrl,
            apiVersion: '2012-08-10'
        })
    }

    public saveContactForm(form: ContactForm) {
        this.db.putItem({
            TableName: "ContactForm",
            Item: {
                "FirstName": {
                    S: form.firstName
                },
                "LastName": {
                    S: form.lastName
                },
                "ReasonForContact": {
                    S: form.reasonForContact
                },
                "PhoneNumber": {
                    S: form.phoneNumber
                },
                "ContactDate": {
                    S: form.contactDate
                },
                "Email": {
                    S: form.contactDate
                }
            }
        })
    }
}