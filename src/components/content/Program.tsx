import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import styled, { AnyStyledComponent } from "styled-components";

import MuiMarkdown from "../common/MuiMarkdown";
import CTABox from "../common/CTABox";
import Projects from "../common/Projects";

import ContentDE from "../../data/program/program_de.md";
import ContentEN from "../../data/program/program_en.md";
import ContentFR from "../../data/program/program_fr.md";
import ContentIT from "../../data/program/program_it.md";
import ContentES from "../../data/program/program_es.md";

import LogoFuturePerfect from "../../images/logo_future_perfect.svg";

const AcceleratorLogo: AnyStyledComponent = styled.img`
  display: block;
  width: 500px;
  max-width: 100%;
  margin: 0 0 2rem 0;
`;

class Program extends React.Component<WithTranslation, {}> {
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
      <Box paddingBottom={4}>
        <AcceleratorLogo src={LogoFuturePerfect} />
        <MuiMarkdown
          markdown={this.getMarkdown(this.props.i18n.language)}
        ></MuiMarkdown>

        <Projects />

        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("accelerator.ctaBox.claim")}
            cta={this.props.t("accelerator.ctaBox.cta")}
            href={this.props.t("accelerator.ctaBox.link")}
          />
        </Box>
      </Box>
    );
  };
}

export default withTranslation()(Program);
