import express,{ Application, Request, Response, NextFunction} from "express";
import { router } from "./routes/routes";

const app = express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

const PORT = 7000

app.set('view engine','pug');
app.set('views','./views');
app.use('/',router);


app.listen(PORT,():void=>{
    console.log("server Start")
})