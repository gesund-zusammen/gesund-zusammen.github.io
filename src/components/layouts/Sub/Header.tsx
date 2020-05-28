import React from "react";
import { Box, Container, Typography, Grid, Hidden } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import HeaderNav from "../Shared/HeaderNav";

const SuperFunkyBox: AnyStyledComponent = styled(Box)`
  && {
    position: relative;
    padding-top: 2rem;
  }
  & > .background {
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    display: block;
    width: 70%;
    height: 100%;
    background: #00aac8;
    border-radius: 0 0 0 50px;
    box-shadow: 20px 20px 30px rgba(26, 11, 61, 0.25);

    @media (min-width: 600px) {
      width: 100%;
      border-radius: 0 0 200px 0;
    }
  }
`;

const FunkyMobileGridItem: AnyStyledComponent = styled(Grid)`
  && {
    position: relative;
    padding-bottom: 0 !important;

    @media (max-width: 599px) {
      margin-bottom: 1rem;

      & > .background {
        position: absolute;
        right: -8px;
        top: 0;
        z-index: -1;
        display: block;
        width: 80%;
        height: 100%;
        background: #00aac8;
        border-radius: 200px 0 0 200px;
        box-shadow: 20px 20px 30px rgba(26, 11, 61, 0.25);
      }
    }
  }
`;

const HeaderContent: AnyStyledComponent = styled.div`
  text-align: center;

  @media (min-width: 600px) {
    text-align: left;
    color: #ffffff;
    margin: 4rem 0 2rem 0;
    padding-right: 10rem;

    & > h1 {
      color: #ffffff;
    }
  }
`;

const HeaderIllustration: AnyStyledComponent = styled.img`
  position: relative;
  width: 70%;
  float: right;

  @media (min-width: 600px) {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 80%;
    width: auto;
    margin-right: 120px;
  }
`;
interface ISubPageHeaderProps {
  title: string;
  image?: string;
}

class SubPageHeader extends React.PureComponent<ISubPageHeaderProps, {}> {
  render = () => {
    return (
      <Box id="header" component="header">
        <SuperFunkyBox>
          <Hidden xsDown>
            <div className="background" />
          </Hidden>

          <Container maxWidth="lg">
            <Box>
              <HeaderNav />
            </Box>
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                  <HeaderContent>
                    <Typography
                      variant="h1"
                      color="secondary"
                      style={{
                        whiteSpace: "pre-line",
                      }}
                    >
                      {this.props.title}
                    </Typography>
                  </HeaderContent>
                </Grid>

                <FunkyMobileGridItem item xs={12} sm={6}>
                  <div className="background" />
                  <HeaderIllustration src={this.props.image} />
                </FunkyMobileGridItem>
              </Grid>
            </Box>
          </Container>
        </SuperFunkyBox>
      </Box>
    );
  };
}

export default SubPageHeader;
