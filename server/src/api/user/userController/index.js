import User from '../userModel'
import { sign } from '../../../auth'

export const Get = async ({ id }) => {
    try {
        return await User.findById(id);
    }
    catch (err) {

    }
}

export const Login = async ({ body: { email, password } }, res, next) => {
    try {
        const user = await User.findOne({ email: email, password: password });
        if (user === null) {
            return res.status(403).send(`user doesn't exists`);
        }

        const token = await sign(user);
        return res.send({ user: user, token: token });
    }
    catch (err) {
        next.sendStatus(500);
    }
}

export const Create = async ({ req, res }) => {
    try {
        const user = new User({
            name: {
                first: 'liad',
                last: 'kapara'
            },
            parentOf: 'omri'
            ,
            password: '12345678'
            ,
            email: 'liad.kapara@gmail.com',
            admin: true
        });

        console.log(await user.save());
    }
    catch (err) {
        console.log(err)
    }
}
