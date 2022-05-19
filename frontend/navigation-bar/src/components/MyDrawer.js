import React from "react";

import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const MyDrawer = ({ links }) => {
   const [open, setOpen] = React.useState(false);
   return (
      <>
         <Drawer
            PaperProps={{
               sx: { backgroundColor: "rgba(0,212,255,1)" },
            }}
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
         >
            <List>
               {links.map((text, index) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemIcon>
                           {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText sx={{ color: "white" }} primary={text} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Drawer>

         <IconButton
            sx={{ marginLeft: "auto", color: "white" }}
            onClick={() => setOpen(true)}
         >
            <MenuRoundedIcon />
         </IconButton>
      </>
   );
};

export default MyDrawer;
