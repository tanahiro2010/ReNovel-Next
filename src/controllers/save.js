import { writeFileSync } from 'fs';

export function writeFile(path, data) {
    const saveData = JSON.stringify(data);

    try {
        writeFileSync(path, saveData, {
            encoding: 'utf-8'
        });
    } catch (e) {
        return false;
    }

    return true;
}