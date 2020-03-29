import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import IlluFaq from "../images/illu_faq.svg";

interface IFaqProps {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <Box style={{ overflow: "hidden" }}>
        <FaqImage src={IlluFaq} alt="FAQ"></FaqImage>
      </Box>
    );
  };
}

const FaqImage: AnyStyledComponent = styled.img`
  float: right;
`;

export default Faq;
