import React from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../Shared/HeaderNav";

interface ISubPageHeaderProps {
  langChangeCallback: (lang: "de" | "en") => void;
  title: string;
  image?: string;
}

class SubPageHeader extends React.PureComponent<ISubPageHeaderProps, {}> {
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
            <Grid item xs={12} sm={8}>
              <HeaderContent>
                <Typography variant="h1" style={{ fontFamily: "inherit" }}>
                  {this.props.title}
                </Typography>
              </HeaderContent>
            </Grid>

            <Hidden xsDown>
              <Grid item xs={12} sm={4}>
                <HeaderIllustration src={this.props.image}></HeaderIllustration>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </>
    );
  };
}

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    margin: 4rem 0 6rem 0;
    padding-right: 4rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 100%;
`;

export default SubPageHeader;
