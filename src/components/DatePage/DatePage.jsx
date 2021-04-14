import style from "./DatePage.module.css";
import React from "react";

class DatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
  render() {
    return (
      <div className={style.date_page}>
        <h1>Current time is: </h1>
        <span>{this.state.time}</span>
      </div>
    );
  }
}

export default DatePage;
