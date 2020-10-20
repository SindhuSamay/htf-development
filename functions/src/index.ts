import * as functions from 'firebase-functions';
import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: true }));
functions.logger.info("Starting Application");

// example function that returns hello world
app.get("/hello", (request: Request, response: Response) => {
    response.json({
        message: "hello world!"
    });
});

/* Change things below this line */

// import functions
import { hello_first, first_last } from "./api/template";
import { hello_EmilyB, emily_basile } from "./api/EmilyB";

app.get("/first-last", first_last);

//add your endpoint in addition to the default one
app.get("/hello-first-last/:name", hello_first);
app.get("/hello-EmilyB/ :name", hello_EmilyB);
app.get("/emily-basile", emily_basile);


/* Change things above this line */

//the line of code below will deploy to firebase cloud functions instead of running locally
//leave this line commented
//export const api = functions.https.onRequest(app);

//the line of code below will run this locally
app.listen(8079);
