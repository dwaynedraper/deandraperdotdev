import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import { pollExampleMessageFormat, sendSms } from "./twilioServices";
import { createRandom, getRandomById } from "./database/database";

// Create Express server
const app = express();

// Express configuration options
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3021;

// Routes
// NOTE: Routes follow the error first callback pattern
app.post("/create-random", async (req, res) => {
  console.log("app.post /create-random");
  await createRandom(req.body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/get-example-message", (req, res) => {
  try {
    const message = pollExampleMessageFormat();
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send(error);
  } finally {
  }
});

app.post("/send-sms", async (req, res) => {
  const { body } = req.body;
  await sendSms("+18322361481", body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
  // try {
  //   await sendSms("+18322361481", body);
  //   res.send("Message sent");
  // } catch (error) {
  //   res.send("Error sending message" + error.message);
  // }
});

app.get("/get-random", async (req, res) => {
  try {
    const result = await getRandomById("query", () => {});
    res.send("Document fetched:\n" + result);
  } catch (error) {
    res.send("Error creating document" + error.message);
  }
});

app.listen(PORT, () =>
  console.log(`twilio-video-app-react server running on ${PORT}`)
);
