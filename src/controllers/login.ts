import express, { Application, Request, Response, NextFunction } from "express";
import dbConn from "../db";
import { sign } from "jsonwebtoken";
import { genSaltSync, hashSync, compareSync } from "bcrypt";
import { dbInsert, dbQuery } from "../utils";
import { UserType } from "./types/usertypes";
import session from "express-session";

//const secret = 'secretkey';

const signup = async function (req: Request, res: Response) {
  const username = req.body.username;
  const name = req.body.name;
  const gender = req.body.gender;
  const user_type = req.body.user_type;
  const email = req.body.email;
  const salt = genSaltSync(10);
  const password = hashSync(req.body.password, salt);
  
  const emailExist = await dbQuery("select email from users WHERE email=?", [
    email,
  ]);

  if (Array.isArray(emailExist) && emailExist.length !== 0) {
    return res.status(400).json({
      error: "ValidationError",
      message: "Email already exists",
    });
  }

  //   Do the Insert
  const result = await dbInsert(
    "insert into users(username,name,gender,user_type,email, password) values(?, ?, ?, ?, ?, ?)",
    [username, name, gender, user_type, email, password]
  );

  const resposnsdata: UserType = await dbQuery(
    "select username,name,gender,user_type,email from users WHERE id=?",
    [result.insertId]
  );

  return res.json(resposnsdata[0]);
};

const login = async function (req: Request, res: Response) {
  //let data = sumData(12,24);

  const email = req.body.email;
  const password = req.body.password;

  const userExist = await dbQuery("select * from users WHERE email=?", [
    email
  ]);
 
  const results = compareSync(password, userExist[0].password);
    if (results) {
      const user = {
        id: userExist[0].id,
        name: userExist[0].name,
        email: userExist[0].email,
      };
      req.session.user = {email:userExist[0].email,id:userExist[0].id,username:userExist[0].name,isLoggedIn:true} ;
      req.session.save();
      console.log(req.session)
      var session_status = '1';
      var session_time = new Date();
      
      const resposnsdata: UserType = await dbQuery("UPDATE users SET session_status=?, session_time=? WHERE id=?", [
        session_status,session_time,userExist[0].id
      ]);
      
      const jsontoken = sign({ result: user }, "secretkey", {
        expiresIn: '1d',
      });
      return res.json({
        success: 1,
        message: "login successfully",
        token: jsontoken,
      });
    } else {
      return res.json({
        success: 0,
        message: "Invalid Email or Password",
      });
    }
};

const logout = function (req: Request, res: Response) {
  console.log(req.session)
  req.session.destroy(function (error: any) {
    if (error) {
      console.log(error);
    }
    return res.json({
      success: 1,
      message: "Logout successfully",
    });
  });
};

export { signup, login, logout };
