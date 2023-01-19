import dbConn from "../db";
import { MYsqlInsertReturnType } from "./types";

export const dbInsert = async (sql: string, values: any[]) => {
  const insertedRecord = await dbConn.query(sql, values);
  return insertedRecord[0] as MYsqlInsertReturnType;
};

export const dbQuery = async (sql: string, values: any[]) => {
  const insertedRecord = await dbConn.query(sql, values);
  return insertedRecord[0] as any[];
};
