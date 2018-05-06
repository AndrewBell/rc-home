/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import Grid from "material-ui/es/Grid/Grid";
import Paper from "material-ui/es/Paper/Paper";
import Typography from "material-ui/es/Typography/Typography";

export default () => (
  <Grid container justify="center">
    <Grid item xs={10} sm={9} md={8} lg={7}>
      <Paper>
        <Typography variant="headline" align="left">
          404 - Not Found
        </Typography>
        <Grid container alignItems="center">
          <Typography variant="body1">
            The page you have requested is not found. <a href="index.js">Return Home</a>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);
