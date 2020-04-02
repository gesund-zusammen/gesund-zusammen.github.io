import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../Shared/HeaderNav";

interface IInitiativePageHeaderProps {
  langChangeCallback: (lang: "de" | "en") => void;
  title: string;
  content: string;
}

class InitiativePageHeader extends React.PureComponent<
  IInitiativePageHeaderProps,
  {}
> {
  handleLangChange = (lang: "de" | "en") => {
    this.props.langChangeCallback(lang);
  };

  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <HeaderNav langChangeCallback={this.handleLangChange}></HeaderNav>
        </Box>
        <Box paddingBottom={4} marginTop={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <HeaderTitle>
                <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                  {this.props.title}
                </Typography>
              </HeaderTitle>
            </Grid>
            <Grid item xs={12} sm={7}>
              <HeaderContent variant="body1">
                {this.props.content}
              </HeaderContent>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
}

const HeaderTitle: AnyStyledComponent = styled.div`
  @media (min-width: 600px) {
    margin: 4rem 0 6rem 0;
    padding-right: 4rem;
  }
`;

const HeaderContent: AnyStyledComponent = styled(Typography)`
  && {
    color: #ffffff;
    margin: 0 0 6rem 0;

    @media (min-width: 600px) {
      margin: 4rem 0;
    }
  }
`;

export default InitiativePageHeader;
