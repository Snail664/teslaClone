import React from "react";
import "./FloatingDetails.css";
import { Link } from "react-router-dom";

class FloatingDetailsV2 extends React.Component {
  state = {
    scrollPosition: 0,
    opacity: 1,
    slide: 0,
    content: [
      <div id="lol" className="floatingDetails">
        <div className="details__title">Model Y</div>
        <div className="details__subTitle">
          <p className="subTitle__left">Order Online for </p>
          <Link className="subTitle__right">Touchless Delivery</Link>
        </div>
        <div className="details__footer">
          <Link className="clickable">
            <div className="buttonOne">CUSTOM ORDER</div>
          </Link>
          <Link className="clickable">
            <div className="buttonTwo">LEARN MORE</div>
          </Link>
        </div>
      </div>,
      "Header 2",
      "Header 3",
      "Header 4",
    ],
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    let viewHeight = window.innerHeight;
    let currentSlide = Math.round(window.pageYOffset / viewHeight);
    console.log("Current Slide: " + currentSlide);
    let currPosition = Math.ceil(window.pageYOffset % viewHeight) / viewHeight;
    let newOpacity = -1 * Math.abs(Math.sin(3.14 * currPosition)) + 1;
    this.setState({
      opacity: newOpacity,
      slide: currentSlide,
    });
  };

  render() {
    return (
      <div className="floatingDetails" style={{ opacity: this.state.opacity }}>
        <h1>{this.state.content[this.state.slide]}</h1>
      </div>
    );
  }
}

export default FloatingDetailsV2;
