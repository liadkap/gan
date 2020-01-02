import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Reorder } from '@material-ui/icons';
import { AppBar, Button, Typography, Toolbar, Box } from '@material-ui/core';
import { useDrawer } from '../../Provider/DrawerStateProvider';
import { useHistory } from "react-router-dom";
import { Column } from 'mui-flex-layout'
import { useUser } from '../../Provider/UserProvider'

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default () => {
  const { User } = useUser();
  const classes = useStyles();
  const history = useHistory();
  const {toggleDrawer} = useDrawer();

  const loginRedirect = () => {
    history.push('/login');
  }

  const homeRedirect = () => {
    history.push('/');
  }

  return (
    <Column>
      <AppBar position={'static'}>
        <Toolbar className={classes.toolbar}>
          {User === null || User === undefined ? <Button color="inherit" onClick={loginRedirect}>התחבר</Button> : <Typography>{`שלום ${User.name.first} ${User.name.last}`}</Typography>}
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Typography onClick={homeRedirect} variant="h6" marginright={'10px'}> הגן המוזיקלי של זהבה </Typography>
            <Reorder onClick={toggleDrawer}></Reorder>
          </Box>
        </Toolbar>
      </AppBar>
    </Column>
  );
}