import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as Twilio from "twilio";
import { SmsResponse } from "../common/models/smsResponse";


const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');

    // const name = (req.query.name || (req.body && req.body.name));

    const smsResponse = new SmsResponse();
    smsResponse.messageSid = (req.body && req.body.MessageSid);
    smsResponse.smsSid = (req.body && req.body.SmsSid);
    smsResponse.accountSid = (req.body && req.body.AccountSid);
    smsResponse.messagingServiceSid = (req.body && req.body.MessagingServiceSid);
    smsResponse.from = (req.body && req.body.From);
    smsResponse.to = (req.body && req.body.To);
    smsResponse.body = (req.body && req.body.Body);
    smsResponse.numMedia = (req.body && req.body.NumMedia);

    const client = Twilio(process.env.accountSid, process.env.authToken);

    

    if (smsResponse.from) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export default httpTrigger;
