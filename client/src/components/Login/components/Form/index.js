import React from 'react'
import { Input, Button } from '@material-ui/core'

export default ({ errors, handleSubmit, handleChange, handleBlur, values, isSubmitting }) =>
    <form display={'flex'}  onSubmit={handleSubmit}>
        <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
        />
        {errors.email && touched.email && errors.email}
        <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
        />
        {errors.password && touched.password && errors.password}
        <Button type="submit" disabled={isSubmitting}> Submit </Button>
    </form>