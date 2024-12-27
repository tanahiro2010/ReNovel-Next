'use server';

import { readFileSync } from 'fs';
import { writeFile }    from '../save';
import { randomUUID }   from 'crypto';

const sessionPath = 'src/config/session.json';

export function createSession(user_id) {
    let token = randomUUID(); // セッショントークン作成
    while (token.includes('-')) {
        token = token.replace('-', '');
    }

    let   database    = JSON.parse(readFileSync(sessionPath, {
        encoding: 'utf-8'
    }));

    database[token] = user_id;

    writeFile(sessionPath, database);
    
    return token;
}