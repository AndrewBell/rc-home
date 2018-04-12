/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import withRoot from "./withRoot";
import AppBar from "../components/AppBar";
import MainHeader from "../components/MainHeader";
import AboutMe from "../components/AboutMe";

class Index extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <MainHeader />
        <AboutMe />
      </div>
    );
  }
}

export default withRoot(Index);
