import express,{ Application, Request, Response, NextFunction} from "express";
const dbConn = require("../db/db");
const { sign } = require("jsonwebtoken");
const {genSaltSync, hashSync ,compareSync} = require("bcrypt");


//const secret = 'secretkey';

const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));

const signup = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);

    const username = req.body.username;
    const name = req.body.name;
    const gender = req.body.gender;
    const user_type = req.body.user_type;
    const email = req.body.email;
    const salt = genSaltSync(10);
    const password = hashSync(req.body.password, salt);

    const sqlcheck = "select * from users WHERE email=?";
    
    dbConn.query(sqlcheck,[email],function(error:any, result:any){
        if(error) throw error;
        if (result.length!=0) {
            res.send("Data Exists");
        } else {
            const sql = "insert into users(username,name,gender,user_type,email, password) values(?, ?, ?, ?, ?, ?)";
    
            dbConn.query(sql, [username,name,gender,user_type,email,password],function(error:any, result:any){
                if(error) throw error;
                res.send("data inserted successfully"+result.insertId);
            });
        }
    });
};

const login = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);

    const email = req.body.email;
    const password = req.body.password;
    
    const sql = "select * from users WHERE email=?";

    dbConn.query(sql, [email],function(error:any, result:any){
        if(error) throw error;
        if (result.length>0) 
        {
            const results = compareSync(password,result[0].password);
            if (results) {
                const user={
                    id:result[0].id,
                    name:result[0].name,
                    email:result[0].email
                }
                session.email=result[0].email;
                session.id = result[0].id;
                session.username = result[0].name;
                const jsontoken = sign({result:user}, "secretkey" , { expiresIn: "300s" });
                return res.json({
                    success:1,
                    id: result[0].id,
                    message: "login successfully",
                    token:jsontoken
                });
            } else {
                return res.json({
                    success:0,
                    message: "Invalid Email or Password"
                });
            }
            //res.render('../../views/dashboard.ejs');
        } else {
            return res.json({
                success:0,
                message: "Invalid Email or Password"
            });
        }
        
    });
};

export{
    signup,
    login
}