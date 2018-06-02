/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";

export default ({ data }) => (
  <div>
    <h1 display={"inline-block"} borderBottom={"1px solid"}>
      Amazing Pandas Eating Things
    </h1>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.title} <span color="#BBB">— {node.frontmatter.date}</span>
        </h3>
        <p>{node.excerpt}</p>
        <a href={node.frontmatter.path}>Link</a>
      </div>
    ))}
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`;
