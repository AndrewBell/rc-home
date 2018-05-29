/**
 * Created by Andrew Bell 3/28/18
 * www.recursivechaos.com
 * andrew@recursivechaos.com
 * Licensed under MIT License 2018. See license.txt for details.
 */
import React from "react";
import withRoot from "./withRoot";
import ResponsiveDrawer from "../components/AppBarAndDrawer";

const Index = ({ children }) => {
  return (
    <div>
      <ResponsiveDrawer content={children()} />
    </div>
  );
};

export default withRoot(Index);
