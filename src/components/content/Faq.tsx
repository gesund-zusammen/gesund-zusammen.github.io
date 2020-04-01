import React from "react";
import { Box } from "@material-ui/core";

import FaqItems from "./FaqItems";
import BecomePart from "../common/BecomePart";

interface IFaqProps {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <>
        <Box id="faq" paddingBottom={4} marginTop={4}>
          <FaqItems lang={this.props.lang}></FaqItems>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
      </>
    );
  };
}

export default Faq;
