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

interface IFaqContent {
  title: string;
  content: string;
}

interface IFaqItemProps {
  lang: "de" | "en";
}

interface IFaqContent {
  title: string;
  content: string;
}
interface IFaqItemsState {
  panel: string;
}
const DEFAULT_STATE: IFaqItemsState = {
  panel: "",
};

const getFaqContent = (lang: "de" | "en"): Array<IFaqContent> => {
  return translated(lang).faq.content;
};

class FaqItems extends React.Component<IFaqItemProps, IFaqItemsState> {
  constructor(props: IFaqItemProps) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  handleExpansionChange = (panel: string) => {
    this.state.panel === panel
      ? this.setState({ panel: "" })
      : this.setState({ panel });
  };
  render = () => {
    return (
      <FaqListWrapper>
        {getFaqContent(this.props.lang).map((faqItem, index) => {
          return (
            <ExpansionPanel
              key={"panel" + index}
              expanded={this.state.panel === "panel" + index}
              onChange={() => this.handleExpansionChange("panel" + index)}
            >
              <ExpansionPanelSummary expandIcon={<StyledAddIcon />}>
                <Typography variant="h5">{faqItem.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">{faqItem.content}</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </FaqListWrapper>
    );
  };
}

const StyledAddIcon: AnyStyledComponent = styled(AddIcon)`
  color: #0a6eaa;
`;

const FaqListWrapper: AnyStyledComponent = styled.div`
  text-align: left;
`;

export default FaqItems;
