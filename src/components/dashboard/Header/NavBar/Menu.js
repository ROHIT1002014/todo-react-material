import React from "react";
import {
  withStyles,
  MenuItem,
  Menu,
  Tooltip,
  Button,
  ListItemText
} from "@material-ui/core";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { title, dropdownList } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Tooltip
        title={title}
        arrow
      >
        <Button
          aria-controls="customized-menu"
          color="secondary"
          onClick={handleClick}
        >
          {title}
        </Button>
      </Tooltip>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {dropdownList.map((text, index) => (
          <StyledMenuItem key={index}>
            <ListItemText primary={text} />
            {/* <ListItemIcon>
            </ListItemIcon> */}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
