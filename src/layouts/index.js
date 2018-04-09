import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import AppBar from '../components/appBar'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Headshot from '../static/headshot.jpg'
import grey from "material-ui/colors/grey";

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
        marginRight: '120px',
        padding: 20
    },
    headshot: {
        width: 180,
        height: 180
    },
    homePanel: {
        height: 350,
        backgroundColor: theme.palette.primary.main,
        paddingTop: 150
    },
    title: {
        color: grey[100]
    }
});

class Index extends React.Component {

    render() {

        const {classes} = this.props;

        return (
            <Grid>
                <AppBar/>

                {/*Header Panel*/}
                <div className={classes.homePanel}>
                    <Typography variant='display3' align='center' className={classes.title}>
                        Andrew 'Doc' Bell
                    </Typography>
                    <Typography variant='headline' align='center' className={classes.title}>
                        Developer, Mentor, Creator
                    </Typography>
                </div>

                {/*About Me Panel*/}
                <Paper className={classes.aboutPaper}>
                    <Typography variant='headline' align='left'>
                        About Me
                    </Typography>
                    <Grid container alignItems='center'>
                        <Grid item sm={12} md={8}>
                            <Typography variant='body1'>
                                I build software with two goals in mind; delight customers and enable fellow
                                developers. I'm passionate about writing clean and collaborative code that both
                                solves problems and matures as it grows. I strive for a DevOps mindset, using tools
                                and automation to enable continuous delivery. Rapid and predictable releases enable
                                the iterative process embodied in the principles of agile. Practicing human centered
                                design has re-enforced the need to collaborate with users to understand their needs,
                                and build on their feedback.
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={4}>
                            <div className={classes.row}>
                                <Avatar src={Headshot} className={classes.headshot}/>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));