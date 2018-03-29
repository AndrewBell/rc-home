import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import Header from '../components/header'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'left',
        background: theme.palette.primary.main,
    }
});

class Index extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid>
                    <Header/>


                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));