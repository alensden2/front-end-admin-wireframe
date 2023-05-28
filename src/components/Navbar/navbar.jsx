import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BadgeIcon from "@mui/icons-material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MenuIcon from "@mui/icons-material/Menu";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { useNavigate } from "react-router";

const drawerWidth = 240;
const icons = [
  <DashboardIcon />,
  <ShowChartIcon />,
  <Inventory2Icon />,
  <AttachMoneyIcon />,
  <HomeIcon />,
  <BadgeIcon />,
];
const routes = [
  "/dashboard",
  "/statistics",
  "/inventory",
  "/sales",
  "/home",
  "/employees",
];

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = ({ isOpen, onToggle }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleRoutes = (route) => {
    navigate(route);
  };
  const handleDrawerClose = () => {
    onToggle();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyled
        position="fixed"
        open={isOpen}
        sx={{ backgroundColor: "white" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}
            edge="start"
            sx={{ mr: 2, ...(isOpen && { display: "none" }) }}
          >
            <MenuIcon
              sx={{
                color: "black",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              color: "black",
            }}
          >
            VogueManic
          </Typography>
        </Toolbar>
      </AppBarStyled>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", marginRight: "auto" }}
            >
              Admin Panel
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Dashboard",
            "Statistics",
            "Inventory",
            "Sales",
            "Home",
            "Employees",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleRoutes(routes[index]);
                }}
              >
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

// referene navbar - https://mui.com/material-ui/react-app-bar/
// reference side bar - https://mui.com/material-ui/react-drawer/
// font reference -<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
// photos https://www.vecteezy.com/photo/1741602-folded-garments-on-white-background
// photos https://stock.adobe.com/ca/search?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=1&filters%5Bcontent_type%3Atemplate%5D=1&filters%5Bcontent_type%3A3d%5D=1&filters%5Bcontent_type%3Aimage%5D=1&order=relevance&safe_search=1&limit=100&search_page=1&search_type=usertyped&acp=&aco=men+shoes&k=men+shoes&get_facets=0
