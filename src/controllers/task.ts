import express, { Application, Request, Response, NextFunction } from "express";
import dbConn from "../db";
import { dbInsert, dbQuery } from "../utils";
import { ModuleType } from "./types/usertypes";

//Todo Insert.
const insert = async function insert(
  req: Request,
  res: Response
) {
  const created_by = req.session.user?.id;
  const task = await req.body.task;
  const time = await req.body.time;

  const result = await dbInsert(
    "insert into module(task, time, created_by) values(?, ?, ?)",
    [task, time, created_by]
  );
  const resposnsdata: ModuleType = await dbQuery(
    "select task,time,created_date from module WHERE id=?",
    [result.insertId]
  );
  return res.json(resposnsdata[0]);
};

//Todo Fetch All Data.
const fetch = async function fetch(req: Request, res: Response) 
{
  const created_by = req.session.user?.id;
  
  const resposnsdata: ModuleType = await dbQuery(
    "select task,time,created_date from module WHERE created_by=?",
    [created_by]
  );
  return res.json(resposnsdata[0]);
};

//Todo Fetch data by Id.
const fetched = async function fetched(
  req: Request,
  res: Response
) {
  const created_by = req.session.user?.id;
  const id = req.params.id;

  const resposnsdata: ModuleType = await dbQuery(
    "select * from module WHERE id=? AND created_by=?",
    [id,created_by]
  );
  return res.json(resposnsdata[0]);
};

//Todo Update by Id.
const edit = async function edit(
  req: Request,
  res: Response
) {
  const created_by = req.session.user?.id;
  const task = await req.body.task;
  const time = await req.body.time;
  const id = await req.body.id;

  const resposnsdata: ModuleType = await dbQuery(
    "UPDATE module SET task=?,time=? WHERE id=? AND created_by=? ",
    [task, time, id, created_by]
  );
  return res.json(resposnsdata[0]);
};

//Todo Delete By Id.
const remove = async function remove(
  req: Request,
  res: Response
) {
  const created_by = req.session.id;
  const id = await req.body.id;

  const resposnsdata: ModuleType = await dbQuery(
    "delete from module where id=? AND created_by=? ",
    [id, created_by]
  );
  return res.json(resposnsdata[0]);
};

export { insert, fetch, fetched, edit, remove };
