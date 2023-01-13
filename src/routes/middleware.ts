import {Application, Request,Response,NextFunction, response} from "express";

const reqFilter = function(req:Request,res:Response,next:NextFunction){
    
    if (!req.body.task) {
        res.send('Please Insert Some Value');
    } 
    else if (typeof req.body.task == 'number'){
        
        res.send('Does not use Number');
    } 
    else {
        next();
    }
}

export{
    reqFilter
}