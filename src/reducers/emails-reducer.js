import { handleActions } from "redux-actions";
import {
    SET_ACTIVE_EMAIL
} from "../actions/types";
import { generateEmail } from "./utils";
import ".././styles/emails-reducer.css";


export default handleActions(
    {
        [SET_ACTIVE_EMAIL] : (state, { payload }) => {
            console.log(payload, "==== payload")
            return {
                ...state,
                activeEmail: {
                    ...generateEmail(payload.email)         
                }       
            }
        }
    },
    {
        activeEmail: {
            id: 1,
            subject: "Angela, welcome to your new Google Account",
            body: "The password for your Google account angelafarts247@gmail.com was changed. If you didn't change it, you should recover your account.",
            senderName: "Google",
            senderEmail: "no-reply@accounts.google.com",
            receivedDate: "Wed Mar 27 2019 21:36:22 GMT-0700 (Pacific Daylight Time)"
        },
        emails: {
            1: {
                id: 1,
                subject: "Angela, welcome to your new Google Account",
                senderName: "Google",
                receivedDate: "March 21"
            },
            2: {
                id: 2,
                subject: "Critical security alert",
                senderName: "Google",
                receivedDate: "March 22"
            },
            3: {
                id: 3,
                subject: "Angela, your 2018 GLE350 is due for a service.",
                senderName: "Mercedes-Benz",
                receivedDate: "March 23"
            },
            4: {
                id: 4,
                subject: "STOP FARTING NOW, LEARN HOW!",
                senderName: "Google",
                receivedDate: "March 23"
            },
            5: {
                id: 5,
                subject: "Everyone around you keep farting? Click this email",
                senderName: "Google",
                receivedDate: "March 24"
            },
            6: {
                id: 6,
                subject: "Angela, stop farting today. We can show you how.",
                senderName: "Google",
                receivedDate: "March 24"
            },
            7: {
                id: 7,
                subject: "Driving people away because of your farting? We can change that.",
                senderName: "Google",
                receivedDate: "March 24"
            },
            8: {
                id: 8,
                subject: "PLEASE PAY TODAY :)",
                senderName: "CodingDojo",
                receivedDate: "March 24"
            },
            9: {
                id: 9,
                subject: "New Lease Deals on the 2019 GLE350",
                senderName: "Mercedes-Benz",
                receivedDate: "March 25"
            },
            10: {
                id: 10,
                subject: "Old People Are Very Gross",
                senderName: "OldFart",
                receivedDate: "March 25"
            },
            11: {
                id: 11,
                subject: "Find someone to fart with today.",
                senderName: "Match.com",
                receivedDate: "March 25"
            },
            12: {
                id: 12,
                subject: "Fart Around This Weekend!",
                senderName: "FartingWeekend",
                receivedDate: "March 26"
            },
            13: {
                id: 13,
                subject: "Need fart help? We can help.",
                senderName: "Fart Help",
                receivedDate: "March 26"
            },
            14: {
                id: 14,
                subject: "Introducing the fart plug. Stop farting today!",
                senderName: "Fart Plug",
                receivedDate: "March 26"
            },
            15: {
                id: 15,
                subject: "Fart Forever - the cologne",
                senderName: "Fart Forever",
                receivedDate: "March 28"
            },
            16: {
                id: 16,
                subject: "Learn to be your best farter, TODAY!",
                senderName: "Karen Valentine",
                receivedDate: "March 28"
            },
            17: {
                id: 17,
                subject: "Fart in a class TOMORROW! What are you waiting for?",
                senderName: "GrouponDeals",
                receivedDate: "March 28"
            },
            18: {
                id: 18,
                subject: "FartTown, coming to San Jose this weekend!",
                senderName: "FartTown Promotions",
                receivedDate: "March 29"
            }
        }
    }
)

