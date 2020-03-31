import React from "react";

import Initiative from "./Initiative";
import Faq from "./Faq";

import Partners from "./Partners";

interface ILandingProps {
  lang: "de" | "en";
}

class Landing extends React.PureComponent<ILandingProps, {}> {
  render = () => {
    return (
      <>
        <Initiative lang={this.props.lang}></Initiative>
        <Partners lang={this.props.lang}></Partners>
        <Faq lang={this.props.lang}></Faq>
      </>
    );
  };
}

export default Landing;
