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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const twilioServices_1 = require("./twilioServices");
const database_1 = require("./database/database");
// Create Express server
const app = (0, express_1.default)();
// Express configuration options
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3021;
// Routes
// NOTE: Routes follow the error first callback pattern
app.post("/create-random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("app.post /create-random");
    yield (0, database_1.createRandom)(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
}));
app.get("/get-example-message", (req, res) => {
    try {
        const message = (0, twilioServices_1.pollExampleMessageFormat)();
        res.status(200).send(message);
    }
    catch (error) {
        res.status(500).send(error);
    }
    finally {
    }
});
app.post("/send-sms", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req.body;
    yield (0, twilioServices_1.sendSms)("+18322361481", body, (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(201).send(data);
        }
    });
    // try {
    //   await sendSms("+18322361481", body);
    //   res.send("Message sent");
    // } catch (error) {
    //   res.send("Error sending message" + error.message);
    // }
}));
app.get("/get-random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, database_1.getRandomById)("query", () => { });
        res.send("Document fetched:\n" + result);
    }
    catch (error) {
        res.send("Error creating document" + error.message);
    }
}));
app.listen(PORT, () => console.log(`twilio-video-app-react server running on ${PORT}`));
