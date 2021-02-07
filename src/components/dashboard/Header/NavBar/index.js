import React from "react";

import {
  Typography,
  CssBaseline,
  Toolbar,
  Button,
  AppBar,
  Box
} from "@material-ui/core";

import Menu from "./Menu";
import useStyles from "./styles";
import TopBar from "../TopBar/index";
import Tags from "../Tags/Tags";

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
            Gyanacharya
          </Typography>
          {navlinkList.map((item, index) => (
            <Box mx={1} key={index}>
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
