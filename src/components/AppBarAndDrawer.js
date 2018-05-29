import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Hidden from "material-ui/Hidden";
import ListItemIcon from "material-ui/List/ListItemIcon";
import ListItem from "material-ui/List/ListItem";
import ListItemText from "material-ui/List/ListItemText";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFlask from "@fortawesome/fontawesome-free-solid/faFlask";
import faEdit from "@fortawesome/fontawesome-free-solid/faEdit";
import faHome from "@fortawesome/fontawesome-free-solid/faHome";

// Based on Material-UI Responsive Example https://material-ui.com/demos/drawers/#responsive-drawer

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%",
  },
  appBar: {
    position: "fixed",
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.secondary,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "fixed",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("md")]: {
      paddingLeft: drawerWidth,
    },
  },
  appIcon: {
    color: theme.palette.text.secondary,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
});

class AppBarAndDrawer extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, content } = this.props;

    const drawer = (
      <div>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faHome} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FontAwesomeIcon icon={faEdit} />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItem>
      </div>
    );

    return (
      <div className={classes.root}>
        {/*App Bar*/}
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={this.handleDrawerToggle} className={classes.appIcon}>
              <FontAwesomeIcon icon={faFlask} />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              &nbsp;recursivechaos labs
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Mobile Hidden Drawer*/}
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{ paper: classes.drawerPaper }}
            ModalProps={{ keepMounted: true }}
          >
            {drawer}
          </Drawer>
        </Hidden>

        {/*Desktop Pinned Drawer*/}
        <Hidden smDown implementation="css">
          <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper }}>
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>

        {/*Content injected here*/}
        <main className={classes.content}>{content}</main>
      </div>
    );
  }
}

AppBarAndDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppBarAndDrawer);
