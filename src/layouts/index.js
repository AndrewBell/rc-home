import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import Header from '../components/header'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Headshot from '../static/headshot.jpg'

const styles = theme => ({
    row: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    aboutPaper: {
        marginTop: '20px',
        marginLeft: '120px',
        marginRight: '120px'
    },
    headshot: {
        width: 100,
        height: 100
    }
});

class Index extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid>
                    <Header/>

                    <Paper className={classes.aboutPaper}>
                        <div className={classes.row}>
                            <Avatar src={Headshot} className={classes.headshot}/>
                        </div>
                        <Typography variant='display1' align='center'>
                            Andrew 'Doc' Bell
                        </Typography>
                        <Typography variant='headline' align='center'>
                            Developer, Mentor, Creator
                        </Typography>
                        <Typography variant='subheading' align='center'>
                            doc@recursivechaos.com
                        </Typography>
                        <Typography variant='subheading' align='center'>
                            @recursive_chaos
                        </Typography>
                        <br />
                    </Paper>
                </Grid>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));