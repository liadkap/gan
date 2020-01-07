import React from 'react';
import { Button, Typography, TextField } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { LockOpenOutlined } from '@material-ui/icons';
import { FullColumn } from '../../../../Layout';
import { makeStyles } from '@material-ui/core/styles';
import { Column, Row } from 'mui-flex-layout';
import { style } from '../../../../Theme'

const useStyles = makeStyles(({palette}) => ({
    Form: {
        width: '40%',
        height: '100%',
        display: 'flex',
        paddingTop: '50px',
        alignItems: 'center',
        flexDirection: 'column',
        top: '20px'
    },
    Avatar: {
        backgroundColor: palette.primary.main
    },
    Submit: {
        backgroundColor: palette.primary.main,
        color: 'white',
        width: '120px',
        height: '40px'
    },
    Row: {
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        paddingTop: '20px'
    },
    Error: {
        color: palette.error,
        fontSize: '15px',
        fontWeight: 'bold',
        direction: 'rtl'
    }
}));

export default ({ errors, handleSubmit, handleChange, handleBlur, values, isSubmitting }) => {
    const classes = useStyles();

    return (
        <FullColumn justifyContent='center' alignItems='center'>
            <form onSubmit={handleSubmit} className={classes.Form}>
                <Avatar className={classes.Avatar}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    התחבר
                    </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="אימייל"
                    autoComplete="email"
                    autoFocus
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="סיסמא"
                    id="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                <Row className={classes.Row}>
                    <Typography className={classes.Error}>{errors}</Typography>
                    <Button type="submit" disabled={isSubmitting} className={classes.Submit}> התחבר </Button>
                </Row>
            </form>
        </FullColumn>
    );
}