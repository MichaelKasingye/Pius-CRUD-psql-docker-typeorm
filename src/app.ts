import "dotenv/config";
import express, { Response } from "express";
import * as bodyParser from "body-parser";
import config from "config";
import validateEnv from "./utils/validateEnv";
import { AppDataSource } from "./utils/data-source";
import { Routes } from "./routes/routes";

AppDataSource.initialize()
  .then(async () => {
    // VALIDATE ENV
    validateEnv();
    console.log(`Data Source has been initialized`);

    const app = express();
    app.use(bodyParser.json());

    // Register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // API CHECKER
    app.get("/", async (_, res: Response) => {
      res.send("Hello Universe!");
    });

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    const port = config.get<number>("port");
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.error(`Data Source initialization error`, error));
