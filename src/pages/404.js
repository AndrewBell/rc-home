/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles/index";
import withRoot from "../layouts/withRoot";

const styles = () => ({
  contentGrid: {
    paddingTop: 150,
  },
  contentPaper: {
    marginTop: "20px",
    padding: 20,
  },
  contentBody: {
    paddingTop: 10,
  },
});

const NotFoundPage = props => (
  <Grid container justify="center" className={props.classes.contentGrid}>
    <Grid item xs={10} sm={9} md={8} lg={7}>
      <Paper className={props.classes.contentPaper}>
        <Typography variant="headline" align="left">
          404 - Not Found
        </Typography>
        <Grid container alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body1" className={props.classes.contentBody}>
              The page you have requested is not found. <a href="/">Return Home</a>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default withRoot(withStyles(styles)(NotFoundPage));
