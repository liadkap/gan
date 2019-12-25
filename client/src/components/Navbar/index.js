import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Reorder } from '@material-ui/icons';
import { AppBar, Button, Typography, Toolbar, Box } from '@material-ui/core';
import {useDrawer} from '../../Provider/DrawerStateProvider';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const drawer = useDrawer();

  const loginRedirect = () => {
    history.push('/login');
  }

  const homeRedirect = () => {
    history.push('/');
  }

  return (
    <AppBar position={'fixed'}>
      <Toolbar className={classes.toolbar}>
        <Button color="inherit" onClick={loginRedirect}>התחבר</Button>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Typography onClick={homeRedirect} variant="h6"> הגן המוזיקלי של זהבה </Typography>
          <Reorder onClick={drawer.toggleDrawer}></Reorder>
        </Box>
      </Toolbar>
    </AppBar>
  );
}