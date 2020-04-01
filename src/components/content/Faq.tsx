import React from "react";
import { Box } from "@material-ui/core";

import FaqItems from "./FaqItems";

import { translated } from "../../util";
import CTABox from "../common/CTABox";


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
          <CTABox
            claim={translated(this.props.lang).faqs.claim}
            cta={translated(this.props.lang).faqs.cta}
            href={translated(this.props.lang).faqs.link}
          ></CTABox>
        </Box>
      </>
    );
  };
}

export default Faq;
