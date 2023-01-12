const con = require("./connection");
const express = require("express");
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

app.post('/post',function(req,res){
    const task = req.body.task;
    const time = req.body.time;

    con.connect(function(error){
        if(error) throw error;

        const sql = "insert into module(task, time) values(?, ?)";
        con.query(sql, [task,time],function(error,result){
            if(error) throw error;
            res.send("data inserted successfully"+result.insertId);
        });
    });

});

app.get('/fetch',function(req,res){
    con.connect(function(error){
        if(error) console.log(error);

        const sql = "select * from module";

        con.query(sql,function(error,result){
            if(error) console.log(error);
            res.send(result);
        });
    });
});

app.get('/fetch/:id',function(req,res){
    con.connect(function(error){
        if(error) console.log(error);
        const id = req.params.id;
        const sql = "select * from module WHERE id=?";

        con.query(sql, [id],function(error,result){
            if(error) console.log(error);
            res.send(result);
        });
    });
});



app.put('/edit',function(req,res){
    
    const task = req.body.task;
    const time = req.body.time;

    con.connect(function(error){
        if(error) throw error;

        const sql = "UPDATE module SET task=?,time=? WHERE id=? ";
        
        const id = req.body.id; 

        con.query(sql, [task,time,id],function(error,result){
            if(error) throw error;
            res.send("data updated successfully");
        });
    });

});

app.delete('/delete',function(req,res){
    con.connect(function(error){
        if(error) console.log(error);
        
        const sql = "delete from module where id=?";

        const id = req.body.id; 

        con.query(sql, [id],function(error,result){
            if(error) console.log(error);
            res.send("data Deleted successfully");
        });
    });
});

app.listen(7000);