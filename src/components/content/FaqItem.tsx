import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled, { AnyStyledComponent } from "styled-components";

import { translated } from "../../util";

interface IFaqItemProps {
  lang: "de" | "en";
}

interface IFaqContent {
  title: string;
  content: string;
}

const getFaqContent = (lang: "de" | "en"): Array<IFaqContent> => {
  console.log("got FaqContent: ", translated(lang).faq.content);
  return translated(lang).faq.content;
};

class FaqItem extends React.PureComponent<IFaqItemProps, {}> {
  render = () => {
    return (
      <FaqListWrapper>
        {getFaqContent(this.props.lang).map((faqItem, index) => {
          return (
            <ExpansionPanel key={"item" + index}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography variant="h4">{faqItem.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body2">{faqItem.content}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </FaqListWrapper>
    );
  };
}
const FaqListWrapper: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
  }
`;

export default FaqItem;
