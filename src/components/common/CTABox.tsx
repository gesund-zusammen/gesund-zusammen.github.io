import React from "react";
import { Button, Paper, Typography, Grid } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

interface ICTABoxProps {
  href: string;
  cta: string;
  claim: string;
}

class CTABox extends React.PureComponent<ICTABoxProps, {}> {
  render = () => {
    return (
      <StyledPaper>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={12} sm={7}>
            <StyledClaim variant="h4">{this.props.claim}</StyledClaim>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CtaBoxButton
              variant="contained"
              disableFocusRipple={true}
              href={this.props.href}
            >
              {this.props.cta}
            </CtaBoxButton>
          </Grid>
        </Grid>
      </StyledPaper>
    );
  };
}

const StyledPaper: AnyStyledComponent = styled(Paper)`
  && {
    padding: 2rem;
    background: #003269;
    color: #ffffff;
    border-radius: 0px 0px 70px 0px;
    box-shadow: 30px 30px 50px rgba(26, 11, 61, 0.25);
  }
`;

const StyledClaim: AnyStyledComponent = styled(Typography)`
  && {
    margin: 0;
    text-align: center;

    @media (min-width: 600px) {
      text-align: left;
    }
  }
`;

const CtaBoxButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-weight: 500;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 0.8rem;
    margin: 2rem auto 0 auto;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    font-weight: 600;

    @media (min-width: 600px) {
      margin: 0;
    }
  }
`;

export default CTABox;
