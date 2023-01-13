import {Application, Request,Response,NextFunction} from "express";
const dbConn = require("../db/db");

const insert = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    
    const task = req.body.task;
    const time = req.body.time;

    const sqlcheck = "select * from module WHERE task=? AND time=?";
    
    dbConn.query(sqlcheck,[task,time],function(error:any, result:any){
        if(error) throw error;
        if (result.length!=0) {
            res.send("Data Exists");
        } else {
            const sql = "insert into module(task, time) values(?, ?)";
    
            dbConn.query(sql, [task,time],function(error:any, result:any){
                if(error) throw error;
                res.send("data inserted successfully"+result.insertId);
            });
        }
    });
};

const fetch = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    
    const sql = "select * from module";
    
    dbConn.query(sql,function(error:any, result:any){
        if(error) throw error;
        res.send(result);
    });
};

const fetched = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const id = req.params.id;
    const sql = "select * from module WHERE id=?";
    
    dbConn.query(sql,[id],function(error:any, result:any){
        if(error) throw error;
        res.send(result);
    });
};

const edit = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const sql = "UPDATE module SET task=?,time=? WHERE id=? ";
    
    const task = req.body.task;
    const time = req.body.time;
    const id = req.body.id;
    
    dbConn.query(sql,[task,time,id],function(error:any, result:any){
        if(error) throw error;
        res.send("data updated successfully");
    });
};

const remove = function(req:Request,res:Response,next:NextFunction){
    //let data = sumData(12,24);
    const sql = "delete from module where id=?";

        const id = req.body.id; 
    
    dbConn.query(sql,[id],function(error:any, result:any){
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