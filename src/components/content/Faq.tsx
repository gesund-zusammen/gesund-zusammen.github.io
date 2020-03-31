import React from "react";
import { Box } from "@material-ui/core";

import FaqItem from "./FaqItem";
import BecomePart from "../common/BecomePart";

interface IFaqProps {
  lang: "de" | "en";
}

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <>
        <Box id="faq" paddingBottom={4} marginTop={4}>
          <FaqItem lang={this.props.lang} />
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <BecomePart lang={this.props.lang}></BecomePart>
        </Box>
      </>
    );
  };
}

export default Faq;
