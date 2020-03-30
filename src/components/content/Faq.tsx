import React from "react";
import { Typography, Button, Hidden, Grid, Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import IlluFaq from "../../images/illu_faq.svg";
import FaqItem from "./FaqItem";
interface IFaqProps {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <Box id="faq" paddingBottom={4} marginTop={4}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item xs={12} sm={4}>
            <FaqContentWrapper>
              <Typography variant="h3">
                {translated(this.props.lang).faq.title}
              </Typography>
              <FaqItem lang={this.props.lang} />
            </FaqContentWrapper>
          </Grid>
          <Hidden xsDown>
            <Grid item xs={12} sm={8}>
              <FaqImage src={IlluFaq} alt="FAQ"></FaqImage>
            </Grid>
          </Hidden>
        </Grid>
      </Box>
    );
  };
}

const FaqContentWrapper: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

const FaqButton: AnyStyledComponent = styled(Button)`
  && {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: none;
    padding: 1rem 5rem;
    border-radius: 15px;
  }
`;

const FaqImage: AnyStyledComponent = styled.img`
  width: 100%;
  display: block;
  margin: 0 0 0 auto;
`;

export default Faq;
