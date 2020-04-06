import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import CTABox from "../common/CTABox";
import Projects from "./Projects";
import Markdown from "markdown-to-jsx";
import ContentDE from "../../data/program/program_de.md";
import ContentEN from "../../data/program/program_en.md";

class Program extends React.Component<WithTranslation, {}> {
  render = () => {
    return (
      <Box paddingBottom={4}>
        <Markdown
          options={{
            overrides: {
              p: {
                component: Typography,
                props: {
                  variant: "body1",
                },
              },
            },
          }}
        >
          {this.props.i18n.language === "de" ? ContentDE : ContentEN}
        </Markdown>

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
