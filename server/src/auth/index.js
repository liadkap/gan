import * as jwt from 'jsonwebtoken'

export const sign = async (user) => {
    try {
        return await jwt.sign(JSON.stringify(user), process.env.KEY);
    }
    catch (err) {
        return err;
    }
}

export const verify = async (token) => {
    try {
        return await jwt.verify(token, process.env.KEY);
    }
    catch (err) {
        return err;
    }
}