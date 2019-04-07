import React, { Component } from "react";
import ".././styles/email-form.css";
const formattingoptions = require(".././assets/formattingoptions.png");
const attachfiles = require(".././assets/attachfiles.png");
const insertlink = require(".././assets/insertlink.png");
const insertemoji = require(".././assets/insertemoji.png");
const insertfilesusingdrive = require(".././assets/insertfilesusingdrive.png");
const insertphoto = require(".././assets/insertphoto.png");
const turnconfidentialmodeonoff = require(".././assets/turnconfidentialmodeonoff.png");
const sendandreceivemoney = require(".././assets/sendandreceivemoney.png");
const discarddraft = require(".././assets/discarddraft.png");
const moreoptions = require(".././assets/moreoptions.png");

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            body: "",
        }
        this.updateSubject = this.updateSubject.bind(this);
        this.updateBody =  this.updateBody.bind(this);
        this.handleSend = this.handleSend.bind(this)
    }

    handleSend() {
        const { sendEmail } = this.props;
        const { subject, body } = this.state
        sendEmail({ subject, body })
    }

    updateSubject(e) {
        e.preventDefault();
        this.setState({
            subject: e.target.value
        });
    }

    updateBody(e) {
        e.preventDefault();
        this.setState({
            body: e.target.value
        });
    }

    render() {
        return (
            <div style={{
                backgroundColor: "white",
                height: "550px",
                width: "518px",
                position: "fixed",
                bottom: "0",
                right: "30px",
                border: "1px solid #e6e6e6"
            }}> 
                <div style={{
                    backgroundColor: "gray",
                    width: "100%",
                    color: "white",
                    // border-top-left-radius: "7px"
                }}>
                    <div id="composeNM">
                        <div id= "NMHeading">New Message</div> 
                        <div id="NewMessage">
                            <span className="glyphicon glyphicon-minus"></span>
                            <span className="glyphicon glyphicon-resize-full"></span>
                            <span className="glyphicon glyphicon-remove-circle"></span>
                        </div>
                    </div>
                </div>
                <input id="composeRecipients"
                    style={{
                        flex: 1,
                        width: "100%"
                    }}
                    placeholder="Recipients"
                />
                <input id="composeSubject"
                     style={{
                        flex: 1,
                        width: "100%"
                    }} 
                    placeholder="Subject"
                    onChange={this.updateSubject}
                />
                <textarea id="composeBody"
                    style={{
                        flex: 1,
                        height: "366px",
                        width: "100%"
                    }}
                    onChange={this.updateBody}
                />
                <div id="bottomDraftSend">
                    <button onClick={ this.handleSend } id="senddraft">Send</button>
                    <div id="formattingoptions"><span className="glyphicon glyphicon-font"></span></div>
                    <div id="attachfiles"><span className="glyphicon glyphicon-paperclip"></span></div>
                    <div id="insertlink"><span className="glyphicon glyphicon-link"></span></div>
                    <div id="insertemoji"><span className="glyphicon glyphicon-heart"></span></div>
                    <div id="insertfilesusingdrive"><span className="glyphicon glyphicon-retweet"></span></div>
                    <div id="insertphoto"><span className="glyphicon glyphicon-picture"></span></div>
                    <div id="turnconfidentialmodeonoff"><span className="glyphicon glyphicon-screenshot"></span></div>
                    <div id="sendandreceivemoney"><span className="glyphicon glyphicon-usd"></span></div>
                    <div id="moreoptionsoptions"><span className="glyphicon glyphicon-option-vertical"></span></div>
                    <div id="discarddraft"><span className="glyphicon glyphicon-trash"></span></div>
                </div>
            </div>
        )
    }
}

export default EmailForm;