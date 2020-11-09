import React, { useState } from "react";

import ResultsComponent from './results.js';
import SurveyComponent from './survey.js';


class ManageSurvey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabClicked: 1};
  }

  clickButton1() {
    this.setState({
     tabClicked: 1
    });
  }

  clickButton2() {
    this.setState({
     tabClicked: 2
    });
  }

  render() {
    return (
      <div>
        <p><a onClick = {() => { this.clickButton1(); }}> button 1 </a></p>
        <p><a onClick = {() => { this.clickButton2(); }}> button 2 </a></p>

        <div>
          {(this.state.tabClicked == 1) && (
            <SurveyComponent></SurveyComponent>
          )}

          {(this.state.tabClicked == 2) && (
            <ResultsComponent></ResultsComponent>
          )}

        </div>

      </div>
      
    );
  }
};

export default ManageSurvey;