import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import FaqItems from "../common/FaqItems";

import CTABox from "../common/CTABox";

interface IFaqProps extends WithTranslation {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <>
        <Box id="faq" paddingBottom={4} marginTop={4}>
          <FaqItems lang={this.props.lang}></FaqItems>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("faqs.claim")}
            cta={this.props.t("faqs.cta")}
            href={this.props.t("faqs.link")}
          ></CTABox>
        </Box>
      </>
    );
  };
}

export default withTranslation()(Faq);
