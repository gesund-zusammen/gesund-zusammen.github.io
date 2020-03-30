import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
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
  return translated(lang).faq.content;
};

class FaqItem extends React.PureComponent<IFaqItemProps, {}> {
  render = () => {
    return (
      <FaqListWrapper>
        {getFaqContent(this.props.lang).map((faqItem, index) => {
          return (
            <ExpansionPanel key={"item" + index}>
              <ExpansionPanelSummary expandIcon={<StyledAddIcon />}>
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

const StyledAddIcon: AnyStyledComponent = styled(AddIcon)`
  color: #0a6eaa;
`;

export default FaqItem;
