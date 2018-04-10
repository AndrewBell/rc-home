/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

const Header = props => (
  <div className={props.classes.root}>
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          recursivechaos
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles()(Header);
