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
import { withTranslation, WithTranslation } from "react-i18next";

import IlluNewsletter from "../../../images/illu_newsletter.svg";

interface INewsletterSignupState {
  userEmail: string;
}

const DEFAULT_STATE = {
  userEmail: "",
};

class NewsletterSignup extends React.PureComponent<
  WithTranslation,
  INewsletterSignupState
> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  render = () => {
    return (
      <NewsletterSignupBox id="newsletter-signup">
        <NewsletterSignupContainer maxWidth="md">
          <Grid container spacing={4}>
            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <NewsletterIllustration src={IlluNewsletter} />
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={8}>
              <Typography variant="h2" color="secondary">
                {this.props.t("newsletter.title")}
              </Typography>
              <Typography variant="body1" color="primary">
                {this.props.t("newsletter.content")}
              </Typography>
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
                      placeholder={this.props.t("newsletter.inputPlaceholder")}
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

  @media (min-width: 600px) {
    padding-bottom: 0;
  }
`;

const NewsletterIllustration: AnyStyledComponent = styled.img`
  float: right;
  margin-top: -4em;
`;

const EmailField: AnyStyledComponent = styled(TextField)`
  && {
    & > div {
      margin-bottom: 0;
      background-color: #ffffff;
      border-radius: 0;
    }
  }
`;

const SubscribeButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #0a6eaa;
    font-size: 1rem;
    font-weight: 600;
    text-transform: none;
    text-align: center;
    border-radius: 0px 0px 30px 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;

    @media (min-width: 600px) {
      margin: 0;
    }
  }
`;

export default withTranslation()(NewsletterSignup);
