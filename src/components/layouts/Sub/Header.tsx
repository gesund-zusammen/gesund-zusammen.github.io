import React from "react";
import { Box, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../Shared/HeaderNav";

interface ISubPageHeaderProps {
  title: string;
  image?: string;
}

class SubPageHeader extends React.PureComponent<ISubPageHeaderProps, {}> {
  render = () => {
    return (
      <>
        <Box paddingBottom={4} marginTop={4}>
          <HeaderNav />
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
              <Grid item xs={4} sm={3}>
                <HeaderIllustration src={this.props.image} />
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
    margin: 2rem 0 0 0;
    padding-right: 4rem;
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  width: 80%;
`;

export default SubPageHeader;
