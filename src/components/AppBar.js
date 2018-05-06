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
import IconButton from "material-ui/IconButton";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFlask from "@fortawesome/fontawesome-free-solid/faFlask";

const styles = theme => ({
  appBar: {
    color: theme.palette.primary.dark,
  },
  appIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
});

const Header = props => (
  <div className={props.classes.root}>
    <AppBar position="fixed" className="appBar">
      <Toolbar>
        <Typography variant="title" color="textSecondary">
          <IconButton href="/" className={props.classes.appIcon}>
            <FontAwesomeIcon icon={faFlask} />
          </IconButton>
          &nbsp;recursivechaos labs
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(Header);
