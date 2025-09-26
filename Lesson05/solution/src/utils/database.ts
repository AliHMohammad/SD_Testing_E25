import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from the project root (two levels up from src/utils/)
dotenv.config({ path: path.join(__dirname, "../..", ".env") });


const dbConfig = {
    host: process.env.MYSQL_HOST || "",
    user: process.env.MYSQL_USER || "",
    database: process.env.MYSQL_DATABASE || "",
    password: process.env.MYSQL_PASSWORD || "",
    multipleStatements: true,
};

export const connection = await mysql.createConnection(dbConfig);
