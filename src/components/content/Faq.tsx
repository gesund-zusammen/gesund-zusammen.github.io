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
        <FaqItem lang={this.props.lang} />
      </Box>
    );
  };
}

export default Faq;
