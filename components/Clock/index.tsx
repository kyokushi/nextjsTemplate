import React, { Component } from "react";
import moment from "moment";
let now: string = moment().format("LLLL");

export default class Clock extends Component {
  componentDidMount() {
    console.log(now);
  }
  render() {
    return <div></div>;
  }
}
