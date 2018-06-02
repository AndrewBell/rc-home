/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import { withStyles } from "material-ui/styles";
import { Grid, Paper, Typography } from "material-ui";
import PropTypes from "prop-types";
import withRoot from "../layouts/withRoot";

const styles = theme => ({
  header: {
    marginTop: "80px",
    color: theme.palette.text.primary,
  },
  count: {
    color: theme.palette.text.primary,
  },
  paperContent: {
    marginTop: "20px",
    padding: 20,
  },
  body: {
    marginBottom: 20,
  },
});

const BlogIndex = ({ data, classes }) => (
  <Grid container justify="center" className={classes.body}>
    <Grid item xs={10} sm={9} md={8} lg={7}>
      <Typography variant="display3" className={classes.header}>
        Blog Posts
      </Typography>
    </Grid>

    <Grid item xs={10} sm={9} md={8} lg={7}>
      <Typography variant="headline">{data.allMarkdownRemark.totalCount} Posts</Typography>
    </Grid>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Grid item xs={10} sm={9} md={8} lg={7} key={node.id}>
        <Paper className={classes.paperContent}>
          <a href={node.frontmatter.path}>
            <Typography variant="headline" gutterBottom>
              {node.frontmatter.title}
            </Typography>
          </a>
          <Typography variant="subheading" gutterBottom>
            {node.frontmatter.date}
          </Typography>
          <Typography variant="body1">{node.excerpt}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
);

export const query = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;

BlogIndex.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(BlogIndex));
