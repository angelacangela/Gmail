import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {ic_mic} from 'react-icons-kit/md/ic_mic';
import {ic_cloud_circle} from 'react-icons-kit/md/ic_cloud_circle';
import {ic_star_half} from 'react-icons-kit/md/ic_star_half';
import {ic_restaurant} from 'react-icons-kit/md/ic_restaurant';
import {ic_bubble_chart} from 'react-icons-kit/md/ic_bubble_chart';
import {search} from 'react-icons-kit/icomoon/search';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import {ic_directions_walk} from 'react-icons-kit/md/ic_directions_walk';
import {androidApps} from 'react-icons-kit/ionicons/androidApps';
const googlelogo20 = require("../../assets/googlelogo.png");

class GoogleMainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="wholeContent">
          <div className="topTab">
            <div className="topTab1">
              <Icon size={25} icon={ic_menu}/>
              <div className="all">ALL</div>
              <div className="images">IMAGES</div>
            </div>
            <div className="topTab2" >
              <div className="bubbleChart">
                <Icon size={25} icon={ic_bubble_chart}/>
              </div>
              <div className="iconTop">
                <Icon size={25} icon={androidApps}/>
              </div>
              <div className="signInButton20">
                <Link
                  to={`/signin`}
                >Sign in
                </Link>
              </div>
            </div>
          </div>
          <div className="googlelogo20">
            <img
                id="googlelogo20"
                src={googlelogo20}
            />
          </div>
          <div className="searchArea">
            <Icon size={15} icon={search}/>
            <input
                id="searchInput"
            />
            <Icon size={20} icon={ic_mic}/>
          </div>
          <div className="buttons hideOnMobile">
            <div className="searchButton1">Google Search</div>
            <div className="searchButton2">I'm Feeling Lucky</div>
          </div>
          <div className="mobileSrchOptions showOnMobile">
            <div className="icons">
            <Icon size={22} icon={ic_cloud_circle}/>
              <div className="iconLetter">Weather</div>
            </div>
            <div className="icons">
            <Icon size={22} icon={ic_directions_walk}/>
              <div className="iconLetter">Sports</div>
            </div>
            <div className="icons">
            <Icon size={22} icon={ic_star_half}/>
              <div className="iconLetter">Entertainment</div>
            </div>
            <div className="icons">
            <Icon size={22} icon={ic_restaurant}/>
            <div className="iconLetter">Restaurants</div>
            </div>
          </div>
          <div className="bottomTab">
            <div className="bottomTab1">
              <a href="https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2m--ahpm-0000000021-0000000000&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" className="eachTab">Advertising</a>
              <a href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none" className="eachTab">Business</a>
              <a href="https://www.google.com/search/howsearchworks/?fg=1" className="eachTab">How Search works</a>
            </div>
            <div className="bottomTab2">
              <a href="https://policies.google.com/privacy?fg=1" className="eachTab">Privacy</a>
              <a href="https://policies.google.com/terms?fg=1" className="eachTab">Terms</a>
              Settings
            </div>
          </div>
      </div>
    )
  }
}

export default GoogleMainPage;
