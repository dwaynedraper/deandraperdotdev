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
exports.getRandomById = exports.createRandom = void 0;
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
function createRandom(document, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const database = client.db("test");
            const collection = database.collection("random");
            const insert = yield collection.insertOne(document);
            console.log("inserted", insert);
            callback(null, insert);
        }
        catch (error) {
            console.log("error", error);
            callback(error, null);
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
exports.createRandom = createRandom;
function getRandomById(query, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const database = client.db("test");
            const collection = database.collection("random");
            const insert = yield collection.find({ That: "should do." });
            console.log("inserted", insert);
            callback(null, insert);
        }
        catch (error) {
            console.log("error", error);
            callback(error, null);
        }
        finally {
            // Ensures that the client will close when you finish/error
            yield client.close();
        }
    });
}
exports.getRandomById = getRandomById;
