'use server';

import { readFileSync } from 'fs';
import { authSession }  from './authSession';
import { writeFile }    from '../save';

const sessionPath = 'src/config/session.json';

export function deleteSession(sessionToken) {
    let session = JSON.parse(readFileSync(sessionPath, {
        encoding: 'utf-8'
    }));

    if (authSession(sessionToken)) {
        delete session[sessionToken];

        writeFile(sessionPath, session);

        return true;
    }

    return false;
}

