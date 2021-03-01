import React from 'react'
import FloatingButtons from 'react-floating-buttons'

import demo from '../img/demo.png'
import git from '../img/git.png'
import video from '../img/video.png'
import trello from '../img/trello.png'

class Portfolio extends React.Component {
  buttonNews = [
    {
      onClick: () => window.open('https://github.com/benjambo/Newsy'),
      src: git,
    },
    {
      onClick: () => window.open('https://benjambo.github.io/Newsy/#/'),
      src: demo,
    },
  ]

  buttonBike = [
    {
      onClick: () => window.open('https://github.com/benjambo/BikeApp'),
      src: git,
    },
    {
      onClick: () => window.open('https://benjambo.github.io/BikeApp/#/'),
      src: demo,
    },
  ]

  buttonMovie = [
    {
      onClick: () => window.open('https://github.com/benjambo/MovieSurfer'),
      src: git,
    },
    {
      onClick: () => window.open('https://moviesurfer-app.herokuapp.com'),
      src: demo,
    },
  ]

  buttoniBeet = [
    {
      onClick: () => window.open('https://github.com/benjambo/iBeet'),
      src: git,
    },
    {
      onClick: () =>
        window.open(
          'https://drive.google.com/file/d/1uo0Kev8sFCPjIgD1F6f4zxuuvpxeOXIt/view'
        ),
      src: video,
    },
  ]

  buttonSum = [
    {
      onClick: () => window.open('https://trello.com/b/BzLJ8w88/sumwans-socks'),
      src: trello,
    },
    {
      onClick: () =>
        window.open(
          'https://drive.google.com/file/d/1OKzLJIzBJRLKhQ6Vbz1Wsp1wR-lX65tp/view'
        ),
      src: video,
    },
  ]

  buttonCup = [
    {
      onClick: () => window.open('https://github.com/Jepu32/ProjectCoffee'),
      src: git,
    },
    {
      onClick: () =>
        window.open(
          'http://users.metropolia.fi/~benjambo/Projekti/Coffee.html'
        ),
      src: demo,
    },
  ]

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Here my most recent projects</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Newsy</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          ReactJS RestAPI NodeJS Express MongoDB HTML5 CSS3
                        </span>
                      </div>
                    </div>
                    <FloatingButtons
                      buttonType="plus"
                      dimension={40}
                      buttonsList={this.buttonNews}
                      top={'2%'}
                      left={'80%'}
                      direction="up"
                    />
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/351300/pexels-photo-351300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Bikester</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          ReactJS RestAPI HTML5 CSS3
                        </span>{' '}
                      </div>
                    </div>
                    <div className="w-like">
                      <FloatingButtons
                        buttonType="plus"
                        dimension={40}
                        buttonsList={this.buttonBike}
                        top={'2%'}
                        left={'80%'}
                        direction="up"
                      />
                      <div className="col-sm-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/965625/pexels-photo-965625.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1300"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">MovieSurfer</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          ReactJS Java mySQL Spring HTML5 CSS3
                        </span>
                        {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                      </div>
                    </div>
                    <FloatingButtons
                      buttonType="plus"
                      dimension={40}
                      buttonsList={this.buttonMovie}
                      top={'2%'}
                      left={'80%'}
                      direction="up"
                    />
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">iBeet</h2>
                      <div className="w-more">
                        <span className="w-ctegory">Java AndroidStudio</span>
                      </div>
                    </div>
                    <FloatingButtons
                      buttonType="plus"
                      dimension={40}
                      buttonsList={this.buttoniBeet}
                      top={'2%'}
                      left={'80%'}
                      direction="up"
                    />
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Sumwan The Game</h2>
                      <div className="w-more">
                        <span className="w-ctegory">C# Unity</span>
                      </div>
                    </div>
                    <FloatingButtons
                      buttonType="plus"
                      dimension={40}
                      buttonsList={this.buttonSum}
                      top={'2%'}
                      left={'80%'}
                      direction="up"
                    />
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img
                    src="https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h2 className="w-title">Cup O'Roast</h2>
                      <div className="w-more">
                        <span className="w-ctegory">
                          HTML5 CSS3 Bootstrap Javascript
                        </span>
                      </div>
                    </div>
                    <FloatingButtons
                      buttonType="plus"
                      dimension={40}
                      buttonsList={this.buttonCup}
                      top={'2%'}
                      left={'80%'}
                      direction="up"
                    />
                    <div className="col-sm-4">
                      <div className="w-like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
