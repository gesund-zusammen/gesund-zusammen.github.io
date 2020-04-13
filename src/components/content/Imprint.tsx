import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";

import ContentDE from "../../data/imprint/imprint_de.md";
import ContentEN from "../../data/imprint/imprint_en.md";
import ContentFR from "../../data/imprint/imprint_fr.md";
import ContentIT from "../../data/imprint/imprint_it.md";
import ContentES from "../../data/imprint/imprint_es.md";

class PrivacyPolicy extends React.PureComponent<WithTranslation, {}> {
  getMarkdown(language: string) {
    switch (language) {
      case "de":
        return ContentDE;
      case "fr":
        return ContentFR;
      case "it":
        return ContentIT;
      case "es":
        return ContentES;
      default:
        return ContentEN;
    }
  }
  render = () => {
    return (
      <PrivacyWrapper paddingBottom={4}>
        <MuiMarkdown
          markdown={this.getMarkdown(this.props.i18n.language)}
        ></MuiMarkdown>
      </PrivacyWrapper>
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
