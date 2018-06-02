/**
 * Created by Andrew Bell 5/02/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import { withStyles } from "material-ui/styles/index";
import { Grid, Paper, Typography } from "material-ui";
import PropTypes from "prop-types";

const styles = theme => ({
  body: {
    marginTop: 100,
    marginBottom: 20,
  },
  contentPaper: {
    marginTop: "20px",
    padding: 20,
  },
});

const BlogTemplate = ({ data, classes }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Grid container className={classes.body} justify="center">
      <Grid item xs={10} sm={9} md={8} lg={7}>
        <Paper className={classes.contentPaper}>
          <Typography variant="headline">{frontmatter.title}</Typography>
          <Typography variant="subheading" gutterBottom>
            {frontmatter.date}
          </Typography>
          <Typography variant="body1" dangerouslySetInnerHTML={{ __html: html }} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

BlogTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withStyles(styles)(BlogTemplate);
