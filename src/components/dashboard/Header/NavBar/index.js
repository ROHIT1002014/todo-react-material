import React from 'react';

import {
  Typography,
  CssBaseline,
  Toolbar,
  Button,
  AppBar,
  Box,
} from '@material-ui/core';

import Menu from './Menu';
import useStyles from './styles';
import TopBar from '../TopBar/index';
import Tags from '../Tags/Tags';
import logo from '../../../../images/logo.jpeg';

export default function NavBar(props) {
  const classes = useStyles();
  const { navlinkList } = props;
  return (
    <div>
      <CssBaseline />
      <TopBar title="Gyanacharya" />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <a
              href="/"
            >
              <img src={logo} height={60} width={120} alt="Logo" />
            </a>
          </Typography>
          {navlinkList.map((item) => (
            <Box mx={1} key={item}>
              <Menu
                title={item.name}
                dropdownList={item.dropdownList}
              />
            </Box>
          ))}
          <Button
            href="/login"
            color="primary"
            variant="contained"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Tags />
    </div>
  );
}
