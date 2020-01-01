import React from 'react'
import { Box, TextField } from '@material-ui/core'
import Form from './components/Form'
import { Formik } from 'formik';
import axios from 'axios'

export default () => {
    const validate = (values) => {

    }

    const onSubmit = async (values, { setSubmitting }) => {
        const { data } = await axios.post('http://localhost:5000/users/login', { email: values.email, password: values.password });
        alert(JSON.stringify(data));
    }

    return (
        <Box display={'flex'} height={'100%'} width={'100%'}>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validate}
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