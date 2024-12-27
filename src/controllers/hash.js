import { createHash } from 'crypto';

export function encode(text) {
    const hash = createHash('sha256');
    hash.update(message);
    const hashHex = hash.digest('hex');

    return hashHex;
}