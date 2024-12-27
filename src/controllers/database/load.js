import { readFileSync } from "fs";

export function LoadDatabase() {
    return JSON.parse(readFileSync('src/config/database.json', {encoding: "utf-8"}));
}