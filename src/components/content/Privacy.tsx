import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";
import CTABox from "../common/CTABox";

import ContentDE from "../../data/privacy/privacy_de.md";
import ContentEN from "../../data/privacy/privacy_en.md";

class PrivacyPolicy extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <PrivacyWrapper paddingBottom={4}>
          <MuiMarkdown>
            {this.props.i18n.language === "de" ? ContentDE : ContentEN}
          </MuiMarkdown>
        </PrivacyWrapper>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("privacy.claim")}
            cta={this.props.t("privacy.cta")}
            href={this.props.t("privacy.link")}
          />
        </Box>
      </>
    );
  };
}

const PrivacyWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

export default withTranslation()(PrivacyPolicy);
