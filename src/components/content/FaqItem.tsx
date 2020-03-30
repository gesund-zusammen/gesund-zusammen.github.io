import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled, { AnyStyledComponent } from "styled-components";
import ExpandPlusIcon from "../../images/plus.svg";
import ExpandMinusIcon from "../../../images/minus.svg";
import { translated } from "../../util";

interface IFaqItemProps {
  lang: "de" | "en";
}

interface IFaqContent {
  title: string;
  content: string;
}

const getFaqContent = (lang: "de" | "en"): Array<IFaqContent> => {
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
                aria-controls="panel1a-content"
                expandIcon={<AddIcon />}
              >
                <Typography variant="h5">{faqItem.title}</Typography>
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
  text-align: left;
`;

export default FaqItem;
