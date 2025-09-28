import { connection } from "./utils/database.js";
import type { RowDataPacket } from "mysql2";

export class GradeCalculator {
    async convert(grade: string, country: string): Promise<string> {
        if (country !== "Denmark" && country !== "USA") {
            throw new Error();
        }

        const sourceColumn = `c${country}`;
        const targetColumn = country === "Denmark" ? "cUSA" : "cDenmark";

        const query = `SELECT ${targetColumn} FROM grades WHERE ${sourceColumn} = ?`;

        const [rows] = await connection.execute<RowDataPacket[]>(query, [grade]);
        if (!rows) {
            throw new Error(`Grade "${grade}" not found for country "${country}"`);
        }

        const result = rows[0]?.[targetColumn] as string;
        if (!result) {
            throw new Error(`No conversion available for grade "${grade}" from ${country}`);
        }

        return result;
    }
}
