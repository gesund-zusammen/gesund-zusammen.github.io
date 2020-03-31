import React from "react";
import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import styled, { AnyStyledComponent } from "styled-components";

interface IFaqContent {
  title: string;
  content: string;
}

interface IFaqItemProps {
  item: IFaqContent;
}

class FaqItem extends React.PureComponent<IFaqItemProps, {}> {
  render = () => {
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<StyledAddIcon />}>
          <Typography variant="h5">{this.props.item.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body2">{this.props.item.content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };
}

const StyledAddIcon: AnyStyledComponent = styled(AddIcon)`
  color: #0a6eaa;
`;

export default FaqItem;
