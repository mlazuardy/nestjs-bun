import { registerAs } from "@nestjs/config";

export const DB_CONFIG = registerAs("db", () => ({
  uri: process.env.DB_URL,
  authSource: "admin",
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  pass: process.env.DB_PASSWORD,
  replicaSet: process.env.DB_RS_NAME || "dbrs",
}));
