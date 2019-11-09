import React, { Component } from "react";
import "./styles.css";
import { Icon } from 'react-icons-kit';
import { Link } from "react-router-dom";
import {facebook} from 'react-icons-kit/icomoon/facebook';
import {twitter} from 'react-icons-kit/icomoon/twitter';
import {youtube} from 'react-icons-kit/icomoon/youtube';
import {linkedin2} from 'react-icons-kit/icomoon/linkedin2';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {chevronsDown} from 'react-icons-kit/feather/chevronsDown';
import {alignJustify} from 'react-icons-kit/feather/alignJustify';
const symbaLogo = require("../../assets/symbalogo.png");
const symbaImage1 = require("../../assets/Symba1.png");
const symbaImage2 = require("../../assets/Symba2.png");
const symbaImage3 = require("../../assets/Symba3.png");
const symbaImage4 = require("../../assets/Symba4.png");
const symbaImage5 = require("../../assets/Symba5.png");

class Symba extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
          <div className="entireContent40">
            <div className="topHeading40">
              <div className="logoSymba">
                <img
                    className="symbalogo"
                    src={symbaLogo}
                />
              </div>
                <div className="iconMenu showOnMobile"><Icon size={26} icon={alignJustify}/></div>
                <div className="topHeadingRight hideOnMobile">
                  <div className="arrow41">
                    <a className="products">Products</a>
                    <Icon className="products showOnDesktop" size={26} icon={ic_keyboard_arrow_down}/>
                  </div>
                  About
                  <Icon className="arrow40" size={26} icon={ic_keyboard_arrow_down}/>
                  Blog
                  <Icon className="arrow40" size={26} icon={ic_keyboard_arrow_down}/>
                  <div className="arrow41">
                  Request a Demo
                  </div>
                  <div className="arrow41">
                  Login
                  </div>
                </div>
                <div>
                </div>
            </div>
            <div className="meetSymba">
              <div className="meetSymbaLeftside">
                <div className="meetSymbaTitle">Meet Symba</div>
                <div className="meetSymbaExpl">
                  Cultivating symbiotic relationships in the gig economy
                </div>
                <div className="meetSymbaDemo">
                Request a Demo
                </div>
              </div>
              <div className="symbaImage50 hideOnMobile">
                <img
                    className="symbaImage50"
                    src={symbaImage5}
                />
              </div>
            </div>
            <div className="processExplanation">
              <div className="manageSymba">
                <div className="manageSymbaInside">
                Managing your contingent workforce is challenging.
                Our platform makes it easier.
                </div>
                <div>
                <Icon className="iconDownChev" size={49} icon={chevronsDown}/>
                </div>
              </div>
              <div className="processSymba hideOnMobile">
                <div className="welcome">
                  <div className="projectLeft">
                    <img
                        className="symbaImage10"
                        src={symbaImage1}
                    />
                  </div>
                  <div>
                    <div className="headingWithPic1">
                      <div className="heading40">Welcome & Train</div>
                      <div className="headingExpl40">
                        Welcome your contingent employees with a customized onboarding experience. Provide key training materials in one easy location.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="projects">
                  <div className="projectLeft">
                    <div className="headingWithPic2">
                      <div className="heading40">Manage Projects</div>
                      <div className="headingExpl40">
                        Easily create projects and monitor their progress.
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                        className="symbaImage40"
                        src={symbaImage2}
                    />
                  </div>
                </div>
                <div className="engage">
                  <div className="projectLeft">
                    <img
                        className="symbaImage40"
                        src={symbaImage3}
                    />
                  </div>
                  <div className="headingWithPic3">
                    <div className="heading40">Engage</div>
                    <div className="headingExpl40">
                      Connect with your contingent workforce and encourage collaboration straight through our platform.
                    </div>
                  </div>
                </div>
                <div className="feedback">
                  <div className="projectLeft">
                    <div className="headingWithPic4">
                      <div className="heading40">Provide Feedback</div>
                      <div className="headingExpl40">
                      Provide feedback on projects to ensure growth. Then, successfully complete a meaningful work experience and offboard!
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className="symbaImage40"
                      src={symbaImage4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="processSymba2 showOnMobile">
                <div className="welcome2">
                  <div className="heading40">
                    Welcome & Train
                  </div>
                  <div className="headingExpl40">
                    Welcome your contingent employees with a customized onboarding experience. Provide key training materials in one easy location.
                  </div>
                  <img
                      className="symbaImage40"
                      src={symbaImage1}
                  />
                </div>
                <div className="projects2">
                  <div className="heading40">
                    Manage Projects
                  </div>
                  <div className="headingExpl40">
                    Easily create projects and monitor their progress.
                  </div>
                  <img
                      className="symbaImage40"
                      src={symbaImage2}
                  />
                </div>
                <div className="engage2">
                  <div className="heading40">
                    Engage
                  </div>
                  <div className="headingExpl40">
                    Connect with your contingent workforce and encourage collaboration straight through our platform.
                  </div>
                  <img
                      className="symbaImage40"
                      src={symbaImage3}
                  />
                </div>
                <div className="feedback2">
                  <div className="heading40">
                    Provide Feedback
                  </div>
                  <div className="headingExpl40">
                    Provide feedback on projects to ensure growth. Then, successfully complete a meaningful work experience and offboard!
                  </div>
                  <img
                      className="symbaImage40"
                      src={symbaImage4}
                  />
                </div>
              </div>
            <div className="emerald">
              <div className="explainS">
                <div className="explainSTop">
                The gig economy is an important part of the workforce ecosystem.
                </div>
                <div>
                We're here to optimize the management of your contingent workforce.
                </div>
              </div>
              <div className="explainSymba">
                <div className="explainSymbaInside">
                Our comprehensive solution allows you to easily manage your contingent workforce and create the best possible experiences for you and your employees.
                </div>
                <div>
                  Whether you have 1 or 100 contingent workers, manage them stress-free with Symba.
                </div>
              </div>
            </div>
            <div className="platformQuestion">
              <div className="platformInterest">
              Interested in our platform?
              </div>
              <div className="sureDemo">
                See how Symba can help you easily manage your contingent workforce from training to offboarding. Fill out the form below to request a demo.
              </div>
              <div className="buttonSure">Sure</div>
            </div>
            <div className="poweredBy">powered by Typeform</div>
            <div className="bottomLine40">
              <div className="bottomLine40Inside">
                <div className="allrights">
                  Symba © 2018 | Privacy Policy
                </div>
                <div className="bottomIcons">
                  <Icon className="bottomIcon1" size={17} icon={facebook}/>
                  <Icon className="bottomIcon1" size={17} icon={twitter}/>
                  <Icon className="bottomIcon1" size={17} icon={linkedin2}/>
                  <Icon className="bottomIcon1" size={17} icon={youtube}/>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    export default Symba;
