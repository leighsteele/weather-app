import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  navbar: {
    boxShadow: "none",
  },
  container: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    display: "flex",
    justifyContent: "space-between"
  },
  active: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: "3px",
    padding: "8px",
  },
  link: {
    textDecoration: "none",
    [theme.breakpoints.up('sm')]: {
      marginLeft: "1rem",
      color: "white",
      padding: "8px",
    },
    [theme.breakpoints.down('xs')]: {
      color: "black",
    },
  },
  mobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
  },
  desktop: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
  }
}));

const navItems = [
  {
    label: "Home",
    path: "/",
    exactPath: true
  },
  {
    label: "Favorites",
    path: "/favorites",
    exactPath: false
  },
]

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.container}>
        <div>
          <Typography variant="h6">
            Weather App
          </Typography>
        </div>

        <div className={classes.desktop}>
          {navItems.map(item => (
            <NavLink
              key={item.label}
              exact={item.exactPath}
              to={item.path}
              activeClassName={classes.active}
              className={classes.link}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className={classes.mobile}>
          <IconButton
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            {navItems.map(item => (
              <NavLink
                key={item.label}
                exact={item.exactPath}
                to={item.path}
                activeClassName={classes.active}
                className={classes.link}
              >
                <MenuItem onClick={handleClose}>{item.label}</MenuItem>
              </NavLink>
            ))}
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  )
}