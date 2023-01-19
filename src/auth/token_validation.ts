import express,{ Application, Request, Response, NextFunction} from "express";
const { verify } = require("jsonwebtoken");

const check_token = function(req:Request,res:Response,next:NextFunction){
    const token = req.get("authorization");
    if (token) {
        const tokens = token.slice(7);
        verify(tokens, "secretkey",function(error:any, decoded:any){
            if (error) {
                return res.json({
                    success:0,
                    message:"Invalid User"
                })
            } else {
                next();
            }
        })
    } else {
        return res.json({
            success:0,
            message:"Access Denied! Unautorized user"
        });
    }

};

export{
    check_token
}