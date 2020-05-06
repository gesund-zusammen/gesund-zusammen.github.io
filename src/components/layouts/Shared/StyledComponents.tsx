import { Box, Container } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

import BgHeader from "../../../images/bg_header.svg";

const HeaderBox: AnyStyledComponent = styled(Box)`
  font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
  color: #ffffff;
  padding: 0 0 6rem 0;
  background-image: url(${BgHeader});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  @media (min-width: 600px) {
    padding-bottom: 8rem;
  }
`;

const MainContentContainer: AnyStyledComponent = styled(Container)`
  overflow: visible;
`;

export { HeaderBox, MainContentContainer };
