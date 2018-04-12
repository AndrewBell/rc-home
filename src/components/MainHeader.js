/**
 * Created by Andrew Bell 4/11/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */

import React from "react";
import { withStyles } from "material-ui/styles";
import withRoot from "../layouts/withRoot";
import Typography from "material-ui/Typography";
import grey from "material-ui/colors/grey";

const styles = theme => ({
  mainHeader: {
    height: 350,
    backgroundColor: theme.palette.primary.main,
    paddingTop: 150,
  },
  title: {
    color: grey[100],
  },
});

class MainHeader extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainHeader}>
        <Typography variant="display3" align="center" className={classes.title}>
          Andrew 'Doc' Bell
        </Typography>
        <Typography variant="headline" align="center" className={classes.title}>
          Developer, Mentor, Creator
        </Typography>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(MainHeader));
