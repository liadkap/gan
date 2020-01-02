import User from '../userModel'
import { sign } from '../../../auth'

export const Get = async ({ id }) => {
    try {
        return await User.findById(id);
    }
    catch (err) {

    }
}

export const Login = async ({ body: { email, password } }, res) => {
    try {
        const user = await User.findOne({ email: email, password: password });
        if (user === null) res.sendStatus(404);

        const token = await sign(user);
        res.send({ user: user, token: token });

    }
    catch (err) {
        res.sendStatus(500);
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
