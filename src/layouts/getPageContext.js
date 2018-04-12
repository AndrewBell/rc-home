/* eslint-disable no-underscore-dangle */
import { SheetsRegistry } from "jss";
import { createMuiTheme, createGenerateClassName } from "material-ui/styles";
import orange from "material-ui/colors/orange";
import grey from "material-ui/colors/grey";
import purple from "material-ui/colors/purple";

// Based on the Gatbsy Material UI Example
// https://github.com/mui-org/material-ui/tree/v1-beta/examples/gatsby
// https://material-ui-next.com/customization/default-theme/
const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    secondary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    text: {
      primary: grey[800],
      secondary: grey[100],
    },
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
