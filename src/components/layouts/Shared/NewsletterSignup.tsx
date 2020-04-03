import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Hidden,
  Slide,
  TextField,
  Typography,
} from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import IlluNewsletter from "../../../images/illu_newsletter.svg";
import TrackVisibility from "react-on-screen";

interface INewsletterSignupState {
  userEmail: string;
}

const DEFAULT_STATE = {
  userEmail: "",
};

class NewsletterSignup extends React.Component<
  WithTranslation,
  INewsletterSignupState
> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  render = () => {
    return (
      <NewsletterSignupBox id="newsletter-signup" marginTop={4}>
        <NewsletterSignupContainer maxWidth="lg">
          <Grid container spacing={4}>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <NewsletterIllustration src={IlluNewsletter} />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
              <Typography variant="h2" color="textSecondary">
                {this.props.t("newsletter.title")}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {this.props.t("newsletter.content")}
              </Typography>
              <TrackVisibility partialVisibility once>
                {({ isVisible }) => (
                  <Slide
                    direction="left"
                    in={isVisible}
                    mountOnEnter
                    timeout={1000}
                  >
                    <form
                      action="https://gesund-zusammen.us19.list-manage.com/subscribe/post"
                      method="POST"
                      target="_blank"
                      noValidate
                    >
                      <input
                        type="hidden"
                        name="u"
                        value="cad2329661c2775d063e682dc"
                      />
                      <input type="hidden" name="id" value="33fca6067e" />
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={8}>
                          <EmailField
                            variant="outlined"
                            placeholder={this.props.t(
                              "newsletter.inputPlaceholder",
                            )}
                            fullWidth={true}
                            type="email"
                            name="EMAIL"
                            id="MERGE0"
                            value={this.state.userEmail}
                            autoCapitalize="off"
                            autoCorrect="off"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                              this.setState({
                                userEmail: event.target.value,
                              });
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <SubscribeButton
                            type="submit"
                            variant="contained"
                            color="primary"
                            disableFocusRipple={true}
                            fullWidth={true}
                            name="subscribe"
                            id="mc-embedded-subscribe"
                          >
                            {this.props.t("newsletter.cta")}
                          </SubscribeButton>
                        </Grid>
                      </Grid>
                      <div
                        style={{ position: "absolute", left: "-5000px" }}
                        aria-hidden="true"
                        aria-label="Please leave the following three fields empty"
                      >
                        <label htmlFor="b_email">Email: </label>
                        <input
                          type="email"
                          name="b_email"
                          placeholder="youremail@gmail.com"
                          id="b_email"
                        />
                      </div>
                    </form>
                  </Slide>
                )}
              </TrackVisibility>
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

export default withTranslation()(NewsletterSignup);
