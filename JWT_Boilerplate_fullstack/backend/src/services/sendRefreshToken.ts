// put this under service dir
import {Response} from 'express';

export const sendRefreshToken = (res: Response , token: string) => {
    res.cookie(
        "jid",
        token,
        {
            // now it can only accesed via request not via javascript
            httpOnly: true
        }
    );
}