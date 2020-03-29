import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import IlluFaq from "../images/illu_faq.svg";

interface IFaqProps {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <Box style={{ position: "relative", overflow: "hidden" }}>
        <FaqImage src={IlluFaq} alt="FAQ"></FaqImage>
        <FaqContentWrapper>
          <Typography variant="h3">Sie haben Fragen?</Typography>
          <FaqButton color="primary" variant="outlined">
            FAQs
          </FaqButton>
        </FaqContentWrapper>
      </Box>
    );
  };
}

const FaqContentWrapper: AnyStyledComponent = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

const FaqButton: AnyStyledComponent = styled(Button)`
  && {
    background: #0a6eaa;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: none;
    padding: 1rem 5rem;
    border-radius: 15px;
  }
`;

const FaqImage: AnyStyledComponent = styled.img`
  float: right;
`;

export default Faq;
