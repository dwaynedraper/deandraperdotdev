"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
const sendSms = (to, body) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("sendSms");
    // const message = await client.messages
    //   .create({
    //     body,
    //     from: process.env.TWILIO_PHONE_NUMBER,
    //     to,
    //   })
    //   .then((message: TwilioMessage) => {
    //     console.log(message.sid, "Message sent successfully!");
    //     console.log("Message SID: ", message.sid);
    //   })
    //   .catch((err: Error) => {
    //     console.log("Error sending message: ", err);
    //   });
    // return message;
    return "Message sent successfully!";
});
exports.sendSms = sendSms;
const exampleMessage = {
    account_sid: "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    api_version: "2010-04-01",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
    date_created: "Thu, 30 Jul 2015 20:12:31 +0000",
    date_sent: "Thu, 30 Jul 2015 20:12:33 +0000",
    date_updated: "Thu, 30 Jul 2015 20:12:33 +0000",
    direction: "outbound-api",
    error_code: null,
    error_message: null,
    from: "+15017122661",
    messaging_service_sid: null,
    num_media: "0",
    num_segments: "1",
    price: null,
    price_unit: null,
    sid: "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    status: "sent",
    subresource_uris: {
        media: "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json",
    },
    to: "+15558675310",
    uri: "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json",
};
