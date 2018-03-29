/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from 'react';
import {withStyles} from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        background: theme.palette.primary.main,
    }
});

const Header = (props) => (
    <Grid item xs={12}>
        <Paper className={props.classes.paper}>
            <Typography variant="display1">
                recursivechaos
            </Typography>
        </Paper>
    </Grid>
);

export default withStyles(styles)(Header)