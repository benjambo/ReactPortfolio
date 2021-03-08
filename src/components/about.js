import React from "react";
//import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
      
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "90%",
          value: "90",
          comment: "*Compared to my knowledge of programming"
        },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          percentage: "87%",
          value: "90"
        },
        { id: "NodeJS_skill", content: "NodeJS", percentage: "80%", value: "90" },
        {
          id: "Java_skill",
          content: "Java",
          percentage: "87%",
          value: "90"
        },
        {
          id: "Express_skill",
          content: "Express",
          percentage: "70%",
          value: "70"
        },
        {
          id: "MongoDB_skill",
          content: "MongoDB Atlas",
          percentage: "70%",
          value: "70"
        },
        {
          id: "Wordpress_skill",
          content: "Wordpress",
          percentage: "70%",
          value: "70"
        },
        {
          id: "SQL_skill",
          content: "SQL",
          percentage: "70%",
          value: "70"
        },
        { id: "HTML5_skill", content: "HTML5 & CSS3", percentage: "95%", value: "95" },
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I’m a 24 year old software engineering student. I have a high interest in IT and love working among technology. During my studies and my own personal interest I have learned to work with Java, JavaScript, ReactJS, NodeJS, Express, MongoDB, SQL, HTML and CSS on strong bases and with these tools I have extensively boosted my knowledge in web and software development. I’m determined on developing myself and on learning new skills."
        },
        {
          id: "second-p-about",
          content:
            "I proudly want to showcase my projects down below. I've created web applications with a ReactJS frontend, NodeJS backend and a MongoDB Atlas database. I've also used RESTAPIs which my project Newsy is a good example of. This site also has authentication which gives the user more functionality on the page after login."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {/*skill.percentage*/}
                              {skill.comment}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
