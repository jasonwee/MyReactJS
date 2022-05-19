import React from "react";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { useTheme, useMediaQuery } from "@mui/material";

import MyDrawer from "./MyDrawer";

const Navbar = ({ links }) => {
   const [value, setValue] = React.useState();

   const theme = useTheme();
   console.log(theme);

   const isMatch = useMediaQuery(theme.breakpoints.down("md"));
   console.log(isMatch);

   return (
      <AppBar
         sx={{
            backgroundImage:
               "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,43,0.8270142180094786) 35%, rgba(0,212,255,1) 100%);",
         }}
      >
         <Toolbar>
            {isMatch ? (
               <>
                  <Typography>
                     <ShoppingCartCheckoutIcon />
                  </Typography>
                  <MyDrawer links={links} />
               </>
            ) : (
               <Grid sx={{ placeItems: "center" }} container>
                  <Grid item xs={2}>
                     <Typography>
                        <ShoppingCartCheckoutIcon />
                     </Typography>
                  </Grid>
                  <Grid item xs={6}>
                     <Tabs
                        textColor="inherit"
                        indicatorColor="secondary"
                        value={value}
                        onChange={(e, val) => setValue(val)}
                        variant="scrollable"
                        scrollButtons={false}
                        aria-label="scrollable prevent tabs example"
                     >
                        {links.map((link, index) => (
                           <Tab key={index} label={link} />
                        ))}
                     </Tabs>
                  </Grid>
                  <Grid item xs={1} />
                  <Grid item xs={3}>
                     <Box display="flex">
                        <Button
                           sx={{
                              marginLeft: "auto",
                              background: "rgba(2,0,36,1)",
                           }}
                           variant="contained"
                        >
                           Login
                        </Button>
                        <Button
                           sx={{ marginLeft: 1, background: "rgba(2,0,36,1)" }}
                           variant="contained"
                        >
                           Signup
                        </Button>
                     </Box>
                  </Grid>
               </Grid>
            )}
         </Toolbar>
      </AppBar>
   );
};

export default Navbar;
