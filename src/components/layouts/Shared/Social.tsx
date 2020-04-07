import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import FooterShareBox from "../Shared/FooterShareBox";

class Social extends React.PureComponent<WithTranslation, {}> {
  copyToClipboard = (str: string) => {
    const el = document.createElement("textarea");
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  render = () => {
    return (
      <SocialWrapper id="social">
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <SocialContent>
                <Typography variant="h2" style={{ color: "#ffffff" }}>
                  {this.props.t("footer.title")}
                </Typography>
                <Typography variant="body1" style={{ color: "#ffffff" }}>
                  {this.props.t("footer.claim")}
                </Typography>
              </SocialContent>
              <FooterShareBox />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TwitterTimelineEmbedWrapper>
                <Typography variant="h2" style={{ color: "#ffffff" }}>
                  {this.props.t("footer.twitter.title")}
                </Typography>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="gesundzusammen"
                  options={{ height: 300 }}
                />
              </TwitterTimelineEmbedWrapper>
            </Grid>
          </Grid>
        </Container>
      </SocialWrapper>
    );
  };
}

const SocialWrapper: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 2rem 0 0 0;
  background-color: #003269;
  overflow: hidden;

  @media (min-width: 600px) {
    padding-top: 4rem;
    background-size: auto 60%;
  }
`;

const SocialContent: AnyStyledComponent = styled.div`
  color: #ffffff;
  text-align: center;
  padding-bottom: 0;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const TwitterTimelineEmbedWrapper: AnyStyledComponent = styled.div``;

export default withTranslation()(Social);
