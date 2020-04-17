import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { Add, Minimize } from "@material-ui/icons";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import FaqData from "../../data/faq.json";

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

class FaqItems extends React.Component<WithTranslation, IFaqItemsState> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  getFaqContent = (): Array<IFaqContent> => {
    return FaqData[this.props.i18n.language];
  };

  handleExpansionChange = (panel: string) => {
    this.state.panel === panel
      ? this.setState({ panel: "" })
      : this.setState({ panel });
  };
  render = () => {
    return (
      <FaqListWrapper>
        {this.getFaqContent().map((faqItem, index) => {
          const panelKey: string = "panel" + index;
          const expanded = this.state.panel === panelKey;
          return (
            <ExpansionPanel
              key={panelKey}
              expanded={expanded}
              onChange={() => this.handleExpansionChange(panelKey)}
            >
              <ExpansionPanelSummary
                expandIcon={
                  expanded ? <StyledMinimizeIcon /> : <StyledAddIcon />
                }
              >
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

const StyledAddIcon: AnyStyledComponent = styled(Add)`
  color: #0a6eaa;
`;
const StyledMinimizeIcon: AnyStyledComponent = styled(Minimize)`
  && {
    color: #ffffff;
    margin-top: -0.5rem;
  }
`;
const FaqListWrapper: AnyStyledComponent = styled.div`
  text-align: left;
`;

export default withTranslation()(FaqItems);
