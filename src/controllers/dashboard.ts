import {Application, Request,Response,NextFunction} from "express";
const dbConn = require("../db/db");

const dashboard = function(req:Request,res:Response,next:NextFunction){
    res.redirect('/dashboard')
};

export{
    dashboard
}
