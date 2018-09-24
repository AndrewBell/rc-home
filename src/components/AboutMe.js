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
import Grid from "material-ui/Grid";
import Paper from "material-ui/Paper";
import Avatar from "material-ui/Avatar";
import Headshot from "../static/headshot.jpg";
import EmailIcon from "../static/email.svg";
import GitHubIcon from "../static/github-box.svg";
import TwitterIcon from "../static/twitter-box.svg";
import LinkedInIcon from "../static/linkedin-box.svg";

const styles = () => ({
  row: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  aboutPaper: {
    marginTop: "20px",
    padding: 20,
  },
  headshot: {
    width: 180,
    height: 180,
  },
  connectIcons: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: 40,
  },
  content: {
    marginBottom: 20,
  },
});

class AboutMe extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.content}>
        <Grid item xs={10} sm={9} md={8} lg={7}>
          <Paper className={classes.aboutPaper}>
            <Typography variant="headline" align="left">
              About Me
            </Typography>

            <Grid container alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography variant="body1">

....................../´¯/) 
....................,/¯../ 
.................../..../ 
............./´¯/'...'/´¯¯`·¸ 
........../'/.../..../......./¨¯\ 
........('(...´...´.... ¯~/'...') 
.........\.................'...../ 
..........''...\.......... _.·´ 
............\..............( 
..............\.............\...            
      
      I build software with two goals in mind; delight customers and enable fellow
                  developers. I'm passionate about writing clean and collaborative code that both
                  solves problems and matures as it grows. I strive for a DevOps mindset, using
                  tools and automation to enable continuous delivery. Rapid and predictable releases
                  enable the iterative process embodied in the principles of agile. Practicing human
                  centered design has re-enforced the need to collaborate with users to understand
                  their needs and build on their feedback.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.row}>
                  <Avatar src={Headshot} className={classes.headshot} />
                </div>
              </Grid>
            </Grid>

            <Grid container alignItems="center" alignContent="center" justify="center">
              <Grid item xs={2}>
                <a href="mailto:doc@recursivechaos.com" target="_blank">
                  <img className={classes.connectIcons} src={EmailIcon} />
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="https://github.com/andrewbell" target="_blank">
                  <img className={classes.connectIcons} src={GitHubIcon} />
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="https://twitter.com/recursive_chaos" target="_blank">
                  <img className={classes.connectIcons} src={TwitterIcon} />
                </a>
              </Grid>
              <Grid item xs={2}>
                <a href="https://www.linkedin.com/in/recursivechaos" target="_blank">
                  <img className={classes.connectIcons} src={LinkedInIcon} />
                </a>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withRoot(withStyles(styles)(AboutMe));
