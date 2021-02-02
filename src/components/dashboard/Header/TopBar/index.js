import React from "react";
import Toolbar from "@material-ui/core/Toolbar/index";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './styles';


export default function TopBar(props) {
    const classes = useStyles();
    const { title } = props;

  return (
    <Toolbar className={classes.toolbar}>
      <Button size="small">Subscribe</Button>
      <Typography
        component="h2"
        variant="h5"
        color="inherit"
        align="center"
        noWrap
        className={classes.toolbarTitle}
      >
        {title}
      </Typography>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Button variant="outlined" size="small" href="/signup">
        Sign up
      </Button>
    </Toolbar>
  );
}
