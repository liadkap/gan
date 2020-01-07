import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Reorder } from '@material-ui/icons';
import { AppBar, Button, Typography, Toolbar, Box } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { Column } from 'mui-flex-layout'
import { useUser } from '../../Provider/UserProvider'
import Drawer from './components/Drawer'

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
  const [isOpened, setIsOpened] = useState(false);

  const loginRedirect = () => {
    history.push('/login');
  }

  const homeRedirect = () => {
    history.push('/');
  }

  const closeDrawer = () => {
    setIsOpened(false);
  }

  const openDrawer = () => {
    setIsOpened(true);
  }

  return (
    <Column>
      <AppBar position={'static'} color='primary'>
        <Toolbar className={classes.toolbar}>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <Reorder onClick={openDrawer}></Reorder>
            <Typography onClick={homeRedirect} variant="h6"> הגן המוזיקלי של זהבה </Typography>
          </Box>
          {User === null || User === undefined ? <Button color="inherit" onClick={loginRedirect}>התחבר</Button> : <Typography>{`שלום ${User.name.first} ${User.name.last}`}</Typography>}
        </Toolbar>
        <Drawer open={isOpened} onClose={closeDrawer}></Drawer>
      </AppBar>
    </Column>
  );
}