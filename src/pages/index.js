import React from 'react'
import Link from 'gatsby-link'
import Button from 'material-ui/Button';

const IndexPage = () => (
  <div>
    <h1>Andrew "Doc" Bell</h1>
    <p>This is a Homepage</p>
    <p>It was built using Gatsby</p>
      <Button variant="raised" color="primary">
          Hello World
      </Button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage
