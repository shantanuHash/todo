import express,{Application, Request,Response,NextFunction} from "express";
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));
const dbConn = require("../db/db");

const insert = async function insert(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);

    const created_by = session.id;
    const task = await req.body.task;
    const time = await req.body.time;

    const sqlcheck = "select * from module WHERE task=? AND time=?";
    
    dbConn.query(sqlcheck,[task,time],function(error:any, result:any){
        if(error) throw error;
        if (result.length!=0) {
            res.send("Data Exists");
        } else {
            const sql = "insert into module(task, time, created_by) values(?, ?, ?)";
    
            dbConn.query(sql, [task,time,created_by],function(error:any, result:any){
                if(error) throw error;
                res.send("data inserted successfully"+result.insertId);
            });
        }
        console.log(session);
    });
};

const fetch = async function fetch(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const created_by = session.id;

    const sql = "select * from module WHERE created_by=?";
    
    dbConn.query(sql,[created_by],function(error:any, result:any){
        if(error) throw error;
        res.send(result);
    });
};

const fetched = async function fetched(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const created_by = session.id;
    const id = req.params.id;
    
    const sql = "select * from module WHERE id=? AND created_by=?";
    
    dbConn.query(sql,[id,created_by],function(error:any, result:any){
        if(error) throw error;
        res.send(result);
    });
};

const edit = async function edit(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const created_by = session.id;
    const sql = "UPDATE module SET task=?,time=? WHERE id=? AND created_by=? ";
    
    const task = await req.body.task;
    const time = await req.body.time;
    const id = await req.body.id;
    
    dbConn.query(sql,[task,time,id,created_by],function(error:any, result:any){
        if(error) throw error;
        res.send("data updated successfully");
    });
};

const remove = async function remove(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const sql = "delete from module where id=? AND created_by=?";
    
    const created_by = session.id;
    const id = await req.body.id; 
    
    dbConn.query(sql,[id,created_by],function(error:any, result:any){
        if(error) throw error;
        res.send("data Deleted successfully");
    });
};

export{
    insert,
    fetch,
    fetched,
    edit,
    remove
}