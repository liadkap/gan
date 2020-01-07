import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import Form from './components/Form'
import { Formik } from 'formik';
import { useUser } from '../../Provider/UserProvider'
import { useHistory } from "react-router-dom";
import { post } from '../../Axios'

export default () => {
    const { setToken, setUser } = useUser();
    const [error, setError] = useState(null)
    const history = useHistory();

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const { data: { user, token } } = await post('users/login', { email: values.email, password: values.password });
            setUser(user);
            setToken(token);
            history.push('/');
        }
        catch ({ response }) {
            response.status === 403 ? setError(`שם משתמש או סיסמא אינם נכונים`) : setError('התרחשה תקלה, אנא נסה שנית מאוחר יותר');
        }
    }

    return (
        <Box display={'flex'} height={'100%'} width={'100%'}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={onSubmit}
            >
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting
                }) => (
                        <Form errors={error} handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values={values} isSubmitting={isSubmitting} />
                    )}
            </Formik>
        </Box>
    )
}