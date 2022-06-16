import express from "express";
import bodyparser from "body-parser";
import Router from "./router/index.js";

const Server = () => {
  const App = express();

  App.use(bodyparser.json());

  App.get("/", (request, response) => {
    response.json({
      message: "Started",
    });
  });

  App.use(Router);

  App.listen(3000, () => {
    console.log("Server has started");
  });
};

Server();
