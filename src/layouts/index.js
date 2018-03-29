import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        background: theme.palette.primary.main,
    },
    header: {
        color: theme.palette.primary.text,
    }
});

class Index extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography className={classes.header} variant="display1">
                                recursivechaos
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));