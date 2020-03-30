import React from "react";
import { Typography } from "@material-ui/core";

import Initiative from "./Initiative";
import Partners from "./Partners";
import Faq from "./Faq";

interface ILandingProps {
  lang: string;
}

class Landing extends React.PureComponent<ILandingProps, {}> {
  render = () => {
    return (
      <>
        <Initiative lang={this.props.lang}></Initiative>
        <Typography variant="h2">Founding & Tech Partner</Typography>
        <Partners lang={this.props.lang}></Partners>
        <Faq lang={this.props.lang}></Faq>
      </>
    );
  };
}

export default Landing;
