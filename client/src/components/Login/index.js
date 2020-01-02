import React from 'react'
import { Box } from '@material-ui/core'
import Form from './components/Form'
import { Formik } from 'formik';
import axios from 'axios'
import { useUser } from '../../Provider/UserProvider'
import { useHistory } from "react-router-dom";

export default () => {
    const { setToken, setUser, User, getToken } = useUser();
    const history = useHistory();

    const validateInput = (values) => {

    }

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            const { data: { user, token } } = await axios.post('http://localhost:5000/users/login', { email: values.email, password: values.password });
            setUser(user);
            setToken(token);
            history.push('/');
        }
        catch ({ message }) {
            alert(message);
        }
    }

    return (
        <Box display={'flex'} height={'100%'} width={'100%'}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateInput}
                onSubmit={onSubmit}
            >
                {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting
                }) => (
                        <Form errors={errors} handleSubmit={handleSubmit} handleChange={handleChange} handleBlur={handleBlur} values={values} isSubmitting={isSubmitting} />
                    )}
            </Formik>
        </Box>
    )
}