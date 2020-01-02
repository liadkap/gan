import { verify } from '../../auth'

export const isAuth = () => async (req, res) => {
    if (req.headers.authorization === null || req.headers.authorization === undefined) res.sendStatus(400);

    const token = req.headers.authorization;
    req.user = await verify(token);
}

export const isAdmin = () => async (req, res) => {
    isAuth();

    if(!req.user.admin) res.sendStatus(400);
}