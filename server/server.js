import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";
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
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.SERVER_PORT || 3021;

// Routes
// NOTE: Routes follow the error first callback pattern

// app.get("/resume", (req, res) => {
//   res.sendFile(path.join(__dirname + "/resume.pdf"));
// });

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
  const body = JSON.stringify(req.body).split(",").join("\n");
  await sendSms("+18322361481", body, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
  res.status(201).send("ok");
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
