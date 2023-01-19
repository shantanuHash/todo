import express, { Application, Request, Response, NextFunction } from "express";
import bodyparser from "body-parser";
import { router } from "./routes/routes";
import session from "express-session";

import cookieParser from "cookie-parser";

const app = express();
const PORT = 7000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
  session({
    secret: "amar",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", router);

app.listen(PORT, (): void => {
  console.log("server Start");
});

type User = {
  id: string;
  email: string;
  username:string;
  isLoggedIn:boolean;
};

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}
