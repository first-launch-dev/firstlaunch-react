import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CustomButton from "../../components/button/index";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { Menu, MenuItem } from "@mui/material";
import {  Router } from "react-router-dom";
// import useStyles from './style';
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function Header(props) {
  const {
    window,
    setIsArabic,
    launchWithUs,
    aboutUs,
    ourTeam,
    talentTrack,
    scrollToSection,
    setFade,
    banner,
    services
  } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate()
  const navItems = [
    // { menu: "Launch With Us", ref: launchWithUs },
    // { menu: "About us", ref: aboutUs },
    // { menu: "Talent Track", ref: talentTrack },
    // { menu: "Our Team", ref: ourTeam },
    // { menu: "Services", ref: services}
   
  ];
  const pageToView = (e, route) => {
    e.preventDefault();
    navigate(route);
  }
  const pageItems = [
    { menu: "Home", route: '/' },
    { menu: "Services", route: '/services' },
    { menu: "Pricing", route: "/pricing" },
    { menu: "Portfolio", route: "/portfolio" },
    { menu: "Our Team", route: "/ourteam" },
    { menu: "About us", route: "/aboutUs" },
    { menu: "Launch With Us", route: "/launchwithus" },
    // { menu: "Talent Track", ref: talentTrack },
    // { menu: "Our Team", ref: ourTeam },
  ]
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ my: 2 }}
        onClick={(event) => scrollToSection(event, banner)}>
        <img
          style={{ maxWidth: "150px" }}
          src={
            theme.palette.mode == "dark"
              ? "assets/logow.png"
              : "assets/logo.png"
          }
          alt=""
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={(event) => scrollToSection(event, item.ref)}
              sx={{ textAlign: "center" }}
              >
              <ListItemText primary={item.menu} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{ bgcolor: "background.paper", backgroundImage: "none" }}
        component="nav">
        <Container>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="red"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, color: "#000" }}
              onClick={(event) => scrollToSection(event, banner)}>
              <img
                style={{ maxWidth: "150px" }}
                src={
                  theme.palette.mode == "dark"
                    ? "assets/logow.png"
                    : "assets/logo.png"
                }
                alt=""
              />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={(event) => scrollToSection(event , item.ref)}
                  sx={{
                    color: "text.primary",
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}>
                  {item.menu}
                </Button>
              ))}
                {pageItems.map((item) => (
                <Button
                  key={item}
                  onClick={(event) => pageToView(event , item.route)}
                  sx={{
                    color: "text.primary",
                    textTransform: "capitalize",
                    fontSize: 16,
                    "&:hover": {
                      color: "#fb8c22",
                      background: "none"
                    },
                    "&:focus": {
                      color: "#fb8c22",
                    },
                  }}>
                  {item.menu}
                  
                </Button>
              ))}
            </Box>
            <Box>
              <IconButton
                sx={{ marginRight: 3 }}
                size="large"
                onClick={handleMenu}
                color={theme.palette.text.primary}>
                <GTranslateIcon color={theme.palette.text.primary} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    setIsArabic(true);
                    setFade(true);
                    handleClose();
                  }}>
                  {" "}
                  <img src="assets/uae.png" width={20} alt="" />
                  &nbsp; العربية
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setIsArabic(false);
                    setFade(true);
                    handleClose();
                  }}>
                  <img src="assets/usa.png" width={20} alt="" /> &nbsp; English
                </MenuItem>
              </Menu>
              <CustomButton text="Login" customSx={{ color: "text.primary" }} />
              <CustomButton
                color="#ff9800"
                customSx={{ ml: 1, color: "text.primary" }}
                text="Sign Up"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
