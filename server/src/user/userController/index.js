import User from '../userModel'

export const GetAll = async ({req,res}) => {
    try {
        return await User.find({});
    }
    catch (err) {

    }
}

export const Get = async ({ id }) => {
    try {
        return await User.findById(id);
    }
    catch (err) {

    }
}

export const Create = async ({req,res}) => {
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