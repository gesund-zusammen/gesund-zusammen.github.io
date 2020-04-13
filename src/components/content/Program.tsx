import React from "react";
import { Box } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";

import MuiMarkdown from "../common/MuiMarkdown";
import CTABox from "../common/CTABox";
import Projects from "./Projects";

import ContentDE from "../../data/program/program_de.md";
import ContentEN from "../../data/program/program_en.md";
import ContentFR from "../../data/program/program_fr.md";
import ContentIT from "../../data/program/program_it.md";
import ContentES from "../../data/program/program_es.md";

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
        <MuiMarkdown
          markdown={this.getMarkdown(this.props.i18n.language)}
        ></MuiMarkdown>

        <Projects />

        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("program.claim")}
            cta={this.props.t("program.cta")}
            href={this.props.t("program.link")}
          />
        </Box>
      </Box>
    );
  };
}

export default withTranslation()(Program);
