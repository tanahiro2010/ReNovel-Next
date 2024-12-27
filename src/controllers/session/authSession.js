'use server';

import { readFileSync } from 'fs';

const sessionPath = 'src/config/session.json';

export async function authSession(sessionToken) {
    const sessionData = JSON.parse(readFileSync(sessionPath, {
        encoding: 'utf-8'
    }));

    if (Object.keys(sessionData).includes(sessionToken)) {
        return sessionData[sessionToken];
    }

    return undefined;
}