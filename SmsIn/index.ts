import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as Twilio from "twilio";
import { SmsResponse } from "../common/models/smsResponse";
import MessagingResponse = require("twilio/lib/twiml/MessagingResponse");


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));

    //const smsResponse = new SmsResponse();
    //smsResponse.messageSid = (req.body && req.body.MessageSid);
    //smsResponse.smsSid = (req.body && req.body.SmsSid);
    //smsResponse.accountSid = (req.body && req.body.AccountSid);
    //smsResponse.messagingServiceSid = (req.body && req.body.MessagingServiceSid);
    //smsResponse.from = (req.body && req.body.From);
    //smsResponse.to = (req.body && req.body.To);
    //smsResponse.body = (req.body && req.body.Body);
    //smsResponse.numMedia = (req.body && req.body.NumMedia);

    // const client = Twilio(process.env.accountSid, process.env.authToken);


    if (req.query && req.query.From) {
        const twiml = new MessagingResponse();
        twiml.message("Hello " + req.query.Body);

        context.res = {
            status: 200,
            body: twiml.toString(),
            headers: {
                'Content-Type': 'text/xml',
            }
        };
        context.done();
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body" 
        };
    }
};

export default httpTrigger;
