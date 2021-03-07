import React from "react";
import Typed from "react-typed";
import video from '../img/video.mp4'


class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div className="video-container">
          <video autoPlay="autoplay" muted loop="loop" className="myVideo">
            <source className="myVideo" src={video} type="video/mp4" />
          </video>
        </div>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">
                Hello, I'm <br />
                Benjamin Schelling
              </h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={['Full Stack Developer', 'Software Engineer']}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
