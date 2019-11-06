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
                  <a className="products">Products</a>
                  <Icon className="products showOnDesktop" size={26} icon={ic_keyboard_arrow_down}/>
                  About
                  <Icon className="arrow40" size={26} icon={ic_keyboard_arrow_down}/>
                  Blog
                  <Icon className="arrow40" size={26} icon={ic_keyboard_arrow_down}/>
                  Request a Demo
                  Login
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
            <div className="manageSymba">
            Managing your contingent workforce is challenging.
            Our platform makes it easier.
            <Icon className="iconDownChev" size={26} icon={chevronsDown}/>
            </div>
            <div className="processSymba">
              <div className="welcome">
                <img
                    className="symbaImage40"
                    src={symbaImage1}
                />
                Welcome & Train
                Welcome your contingent employees with a customized onboarding experience. Provide key training materials in one easy location.
              </div>
              <div className="projects">
                Manage Projects
                Easily create projects and monitor their progress.
              <img
                  className="symbaImage40"
                  src={symbaImage2}
              />
              </div>
              <div className="engage">
              <img
                  className="symbaImage40"
                  src={symbaImage3}
              />
              Engage
              Connect with your contingent workforce and encourage collaboration straight through our platform.
              </div>
              <div className="feedback">
              Provide Feedback
              Provide feedback on projects to ensure growth. Then, successfully complete a meaningful work experience and offboard!
              <img
                  className="symbaImage40"
                  src={symbaImage4}
              />
              </div>
            </div>
            <div className="explainSymba">
              <div className="explainSymbaInside">
              Our comprehensive solution allows you to easily manage your contingent workforce and create the best possible experiences for you and your employees.
              </div>
            <p>Whether you have 1 or 100 contingent workers, manage them stress-free with Symba.</p>
            </div>
            <div className="platformQuestion">
              <div className="platformInterest">
              Interested in our platform?
              </div>
              See how Symba can help you easily manage your contingent workforce from training to offboarding. Fill out the form below to request a demo.
              <div className="buttonSure">Sure</div>
            </div>
            <div className="bottomLine40">
              powered by Typeform
              <div className="bottomIcons">
                <Icon className="iconFacebook" size={26} icon={facebook}/>
                <Icon className="iconTwitter" size={26} icon={twitter}/>
                <Icon className="iconYoutube" size={26} icon={youtube}/>
                <Icon className="iconLinkedin2" size={26} icon={linkedin2}/>
              </div>
              Symba © 2018 | Privacy Policy
            </div>
          </div>
        )
      }
    }
    export default Symba;
