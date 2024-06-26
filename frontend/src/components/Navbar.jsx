
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Link, useLocation} from 'react-router-dom'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const drawerWidth = 240;

export default function Navbar(props) {
  const {content} = props
  const location = useLocation()
  const path = location.pathname


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
          
              <ListItem key={1} disablePadding>
                <ListItemButton component={Link} to="/calendar1" selected={"/calendar1" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #1"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={2} disablePadding>
                <ListItemButton component={Link} to="/calendar2" selected={"/calendar2" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #2"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={3} disablePadding>
                <ListItemButton component={Link} to="/calendar3" selected={"/calendar3" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #3"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={4} disablePadding>
                <ListItemButton component={Link} to="/calendar4" selected={"/calendar4" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #4"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={5} disablePadding>
                <ListItemButton component={Link} to="/calendar5" selected={"/calendar5" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #5"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={6} disablePadding>
                <ListItemButton component={Link} to="/calendar6" selected={"/calendar6" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #6"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={7} disablePadding>
                <ListItemButton component={Link} to="/calendar7" selected={"/calendar7" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #7"} />
                </ListItemButton>
              </ListItem>


              <ListItem key={8} disablePadding>
                <ListItemButton component={Link} to="/calendar8" selected={"/calendar8" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #8"} />
                </ListItemButton>
              </ListItem>

              <ListItem key={9} disablePadding>
                <ListItemButton component={Link} to="/calendar9" selected={"/calendar9" === path}>
                  <ListItemIcon>
                        <CalendarMonthIcon/> 
                  </ListItemIcon>
                  <ListItemText primary={"Calendar #9"} />
                </ListItemButton>
              </ListItem>


  
          </List>
         
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
            {content}
      </Box>
    </Box>
  );
}