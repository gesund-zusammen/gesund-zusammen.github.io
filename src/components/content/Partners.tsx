import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import PartnerItems from "../common/PartnerItems";

import CTABox from "../common/CTABox";

class NewPartners extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="partners" paddingBottom={4} marginTop={4}>
          <PartnerItems />
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("partners.claim")}
            cta={this.props.t("partners.cta")}
            href={this.props.t("partners.link")}
          />
        </Box>
      </>
    );
  };
}

export default withTranslation()(NewPartners);
