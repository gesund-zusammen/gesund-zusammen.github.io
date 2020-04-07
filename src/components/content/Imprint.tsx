import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import Markdown from "markdown-to-jsx";
import { withTranslation, WithTranslation } from "react-i18next";
import ContentDE from "../../data/imprint/imprint_de.md";
import ContentEN from "../../data/imprint/imprint_en.md";

class PrivacyPolicy extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <PrivacyWrapper paddingBottom={4}>
        <Markdown>
          {this.props.i18n.language === "de" ? ContentDE : ContentEN}
        </Markdown>
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
