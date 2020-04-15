import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import CountryInitiativeItems from "./CountryInitiativeItems";

class CountryInitiatives extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="countryInitiatives" paddingBottom={4} marginTop={4}>
          <CountryInitiativeItems />
        </Box>
      </>
    );
  };
}

export default withTranslation()(CountryInitiatives);
