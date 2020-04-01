import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../../util";

import IlluNewsletter from "../../../images/illu_newsletter.svg";

interface INewsletterSignupProps {
  lang: "de" | "en";
}

class NewsletterSignup extends React.Component<INewsletterSignupProps, {}> {
  render = () => {
    return (
      <NewsletterSignupBox id="newsletter-signup" marginTop={4}>
        <NewsletterSignupContainer maxWidth="lg">
          <Grid container spacing={4}>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <NewsletterIllustration
                  src={IlluNewsletter}
                ></NewsletterIllustration>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" color="textSecondary">
                {translated(this.props.lang).newsletter.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {translated(this.props.lang).newsletter.content}
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <EmailField
                    variant="outlined"
                    placeholder={
                      translated(this.props.lang).newsletter.inputPlaceholder
                    }
                    fullWidth={true}
                  ></EmailField>
                </Grid>
                <Grid item xs={4}>
                  <SubscribeButton
                    variant="contained"
                    color="primary"
                    disableFocusRipple={true}
                    fullWidth={true}
                  >
                    {translated(this.props.lang).newsletter.cta}
                  </SubscribeButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </NewsletterSignupContainer>
      </NewsletterSignupBox>
    );
  };
}

const NewsletterSignupBox: AnyStyledComponent = styled(Box)`
  background-color: #e9e6e6;
`;

const NewsletterSignupContainer: AnyStyledComponent = styled(Container)`
  padding: 4rem 0;
`;

const NewsletterIllustration: AnyStyledComponent = styled.img`
  display: inline-block;
  width: 100%;
  height: auto;
`;

const EmailField: AnyStyledComponent = styled(TextField)`
  && {
    & > div {
      margin-bottom: 0;
      background-color: #ffffff;
    }
  }
`;

const SubscribeButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #0a6eaa;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    margin: 0 auto;

    @media (min-width: 600px) {
      margin: 0;
      font-size: 1.4rem;
    }
  }
`;

export default NewsletterSignup;
