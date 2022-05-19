import React from 'react'
//import { makeStyles } from '@material-ui/core'
import LayoutStyles from "./LayoutStyles";
import useClasses from "./Hook/Hook";

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';


/* see LayoutStyles.js
 *

const drawerWidth = 240

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
})
*/

export default function Layout({ children }) {
  //const classes = useStyles()
  //var classes = useStyles();
  var classes = useClasses(LayoutStyles);

  return (
    <div className={classes.root}>
      {/* app bar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        { children }
      </div>
    </div>
  )
}
