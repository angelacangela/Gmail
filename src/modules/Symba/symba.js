import React, { Component } from "react";
import "./styles.css";
import { Icon } from 'react-icons-kit';
import { Link } from "react-router-dom";
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';

class Symba extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
          <div className="entireContent40">
            <div className="topHeading40">
              <div className="logoSymba">Symba</div>
                <div className="topHeadingRight hideOnMobile">
                  Products
                  <Icon className="arrow40" size={26} icon={ic_keyboard_arrow_down}/>
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
              <div className="meetSymbaTitle">Meet Symba</div>
              <div className="meetSymbaExpl">
                Cultivating symbiotic relationships in the gig economy
              </div>
              <div className="meetSymbaDemo">
              Request a Demo
              </div>
            </div>
            <div className="manageSymba">
            Managing your contingent workforce is challenging.
            Our platform makes it easier.
            </div>
            <div className="processSymba">
              <div className="welcome">
              </div>
              <div className="projects">
              </div>
              <div className="engage">
              </div>
              <div className="feedback">
              </div>
            </div>
            <div className="explainSymba">
            </div>
            <div className="platformQuestion">
              See how Symba can help you easily manage your contingent workforce from training to offboarding. Fill out the form below to request a demo.
              <div className="buttonSure">Sure</div>
            </div>
            <div className="bottomLine40">
            </div>
          </div>
        )
      }
    }
    export default Symba;
