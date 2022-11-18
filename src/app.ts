import 'dotenv/config'
import express, { Response,Request } from 'express';
import * as bodyParser from "body-parser"
import config from 'config';
import validateEnv from './utils/validateEnv';
import { AppDataSource } from './utils/data-source';
import { UserRouter } from "./routes/UserRoute"

AppDataSource.initialize()
  .then(async () => {
    // VALIDATE ENV
    validateEnv();
    console.log(`Data Source has been initialized`);

    const app = express();
    app.use(bodyParser.json())

    
    // MIDDLEWARE

    // 1. Body parser

    // 2. Logger

    // 3. Cookie Parser

    // 4. Cors

    // ROUTES
    app.use('/api/users', UserRouter);


    // API CHECKER
    app.get('/', async (_, res: Response) => {
        res.send('Hello Universe!');

    })  

    // UNHANDLED ROUTE

    // GLOBAL ERROR HANDLER

    const port = config.get<number>('port');
    app.listen(port);

    console.log(`Server started on port: ${port}`);
  })
  .catch((error) => console.error(`Data Source initialization error`, error)
  );
