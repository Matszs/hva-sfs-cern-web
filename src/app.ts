import express from 'express';

// Controllers
import * as homeController from "./controllers/home";

// Create Express server
const app = express();
const port = 3000;

app.get("/", homeController.index);

app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});