import { writeFile } from '../save';

export function SaveDatabase(database) {
    return writeFile('src/config/database.json', database);
}
