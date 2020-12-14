import { APIGatewayProxyHandler } from "aws-lambda";
import { ResponseHelper } from "../helpers/response-helper";
import { ContactForm, isContactForm } from "../models/contact-form";

export const contactMe: APIGatewayProxyHandler = async (event, context) => {
    if(!event?.body) {
        return ResponseHelper.badRequestResponse("No post body.")
    }

    const contactForm: ContactForm = JSON.parse(event.body);

    if (!isContactForm(contactForm)) {
        return ResponseHelper.badRequestResponse("Incomplete request.")
    }

    // save to db
}