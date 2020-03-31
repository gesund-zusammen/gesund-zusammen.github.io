import React from "react";
import { Box, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { translated } from "../../util";

interface IPressProps {
  lang: "de" | "en";
}
class PressContact extends React.PureComponent<IPressProps, {}> {
  render = () => {
    return (
      <Box id="press" paddingBottom={4} marginTop={4}>
        <Typography variant="h2">
          {translated(this.props.lang).press.pageHeader}
        </Typography>
      </Box>
    );
  };
}

export default PressContact;
