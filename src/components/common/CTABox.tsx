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
            <StyledClaim variant="h4" color="primary">
              {this.props.claim}
            </StyledClaim>
          </Grid>
          <Grid item xs={12} sm={5}>
            <PartnerButton
              color="primary"
              variant="contained"
              disableFocusRipple={true}
              href={this.props.href}
            >
              {this.props.cta}
            </PartnerButton>
          </Grid>
        </Grid>
      </StyledPaper>
    );
  };
}

const StyledPaper: AnyStyledComponent = styled(Paper)`
  && {
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0px 2px 24px #e3e6eb;
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

const PartnerButton: AnyStyledComponent = styled(Button)`
  && {
    display: block;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: none;
    text-align: center;
    border-radius: 4px;
    padding: 1rem;
    margin: 2rem auto 0 auto;

    @media (min-width: 600px) {
      margin: 0;
      font-size: 1.4rem;
    }
  }
`;

export default CTABox;
