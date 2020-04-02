import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import FaqItems from "../common/FaqItems";

import CTABox from "../common/CTABox";

class Faq extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <Box id="faq" paddingBottom={4} marginTop={4}>
          <FaqItems />
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("faqs.claim")}
            cta={this.props.t("faqs.cta")}
            href={this.props.t("faqs.link")}
          />
        </Box>
      </>
    );
  };
}

export default withTranslation()(Faq);
