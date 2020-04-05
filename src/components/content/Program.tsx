import React from "react";
import { Box, Typography } from "@material-ui/core";
import { withTranslation, WithTranslation } from "react-i18next";
import CTABox from "../common/CTABox";
import Projects from "./Projects";

class Program extends React.Component<WithTranslation, {}> {
  render = () => {
    return (
      <Box paddingBottom={4}>
        <Typography variant="h3">{this.props.t("program.title")}</Typography>
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {this.props.t("program.content")}
        </Typography>

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
