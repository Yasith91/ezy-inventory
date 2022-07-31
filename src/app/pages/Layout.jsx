import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { getTestData } from "../store/test/actions";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Layout = () => {
  const dispatch = useDispatch();
  const inventories = useSelector((state) => {
    console.log("sss", state);
    return state.inventoryData.inventories;
  });
  // const [inventoryList, setInventoryList] = useState([...inventories]);

  useEffect(() => {
    // dispatch(getTestData());
  }, [dispatch]);

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                EzyInventory
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem key="dashboard" onClick={handleCloseNavMenu}>
                    <Link to="/">Dashboard</Link>
                  </MenuItem>
                  {inventories.map(
                    (inv) =>
                      inv.id &&
                      inv.objType && (
                        <MenuItem
                          key={inv.objType}
                          onClick={handleCloseNavMenu}
                        >
                          <Link to={`/inventories/${inv.id}`}>
                            {inv.objType}
                          </Link>
                        </MenuItem>
                      )
                  )}
                  <MenuItem key="settings" onClick={handleCloseNavMenu}>
                    <Link to="/inventories">Settings</Link>
                  </MenuItem>
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                EzyInventory
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))} */}
                <Button
                  key="dashboard"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/">Dashboard</Link>
                </Button>
                {inventories.map(
                  (inv) =>
                    inv.id &&
                    inv.objType && (
                      <Button
                        key={inv.objType}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        <Link to={`/inventories/${inv.id}`}>{inv.objType}</Link>
                      </Button>
                      // <MenuItem key={inv.objType} onClick={handleCloseNavMenu}>
                      //   <Link to={`/inventories/${inv.id}`}>{inv.objType}</Link>
                      // </MenuItem>
                    )
                )}
                <Button
                  key="settings"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link to="/inventories">Settings</Link>
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
      <Grid item xs={12}>
        <Outlet />
      </Grid>
      {/* <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid> */}
    </Grid>
    // <div>

    // </div>
  );
};

export default Layout;
