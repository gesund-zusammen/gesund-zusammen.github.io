import React from "react";
import { Box } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

import FaqItem from "../common/FaqItem";
import CTABox from "../common/CTABox";

interface IFaqProps {
  lang: "de" | "en";
}

interface IFaqContent {
  title: string;
  content: string;
}

const getFaqContent = (lang: "de" | "en"): Array<IFaqContent> => {
  return translated(lang).faqs.content;
};

class Faq extends React.PureComponent<IFaqProps, {}> {
  render = () => {
    return (
      <>
        <Box id="faq" paddingBottom={4} marginTop={4}>
          <FaqListWrapper>
            {getFaqContent(this.props.lang).map((faqItem, index) => {
              return <FaqItem key={`item${index}`} item={faqItem} />;
            })}
          </FaqListWrapper>
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

const FaqListWrapper: AnyStyledComponent = styled.div`
  text-align: left;
`;

export default Faq;
