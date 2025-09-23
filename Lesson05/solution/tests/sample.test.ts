import { test, expect } from "vitest";
import dotenv from "dotenv";

dotenv.config();

//TODO: delete, but this works with dotenv.config
test("should be true", () => {
    expect(process.env.API_KEY).toEqual("TOKEN");
});
