import { handleActions } from "redux-actions";
import {
    SET_ACTIVE_EMAIL
} from "../actions/types";
import { generateEmail } from "./utils";


export default handleActions(
    {
        [SET_ACTIVE_EMAIL] : (state, { payload }) => {
            console.log(payload, "==== payload")
            return {
                ...state,
                emails: {
                    ...state.emails,
                    [payload.email.id]: {
                        ...payload.email,
                        read: true
                    }
                },
                activeEmail: {
                    ...generateEmail(payload.email),
                    read: true         
                }       
            }
        }
    },
    {
        activeEmail: {
            id: 1,
            subject: "Angela, welcome to your new Google Account",
            body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
            senderName: "Google",
            senderEmail: "no-reply@accounts.google.com",
            receivedDate: "Wed Mar 27 2019 21:36:22 GMT-0700 (Pacific Daylight Time)",
            read: true
        },
        emails: {
            1: {
                id: 1,
                subject: "Angela, welcome to your new Google Account",
                senderName: "Google",
                receivedDate: "March 21",
                read: false
            },
            2: {
                id: 2,
                subject: "Critical security alert",
                senderName: "Google",
                receivedDate: "March 22",
                read: false
            },
            3: {
                id: 3,
                subject: "Angela, your 2018 GLE350 is due for a service.",
                senderName: "Mercedes-Benz",
                receivedDate: "March 23",
                read: false
            },
            4: {
                id: 4,
                subject: "STOP laughING NOW, LEARN HOW!",
                senderName: "Google",
                receivedDate: "March 23",
                read: false
            },
            5: {
                id: 5,
                subject: "Everyone around you keep laughing? Click this email",
                senderName: "Google",
                receivedDate: "March 24",
                read: false
            },
            6: {
                id: 6,
                subject: "Angela, stop laughing today. We can show you how.",
                senderName: "Google",
                receivedDate: "March 24",
                read: false
            },
            7: {
                id: 7,
                subject: "Driving people away because of your laughing? We can change that.",
                senderName: "Google",
                receivedDate: "March 24",
                read: false
            },
            8: {
                id: 8,
                subject: "PLEASE PAY TODAY :)",
                senderName: "CodingDojo",
                receivedDate: "March 24",
                read: false
            },
            9: {
                id: 9,
                subject: "New Lease Deals on the 2019 GLE350",
                senderName: "Mercedes-Benz",
                receivedDate: "March 25",
                read: false
            },
            10: {
                id: 10,
                subject: "Old People Are Very Gross",
                senderName: "Oldlaugh",
                receivedDate: "March 25",
                read: false
            },
            11: {
                id: 11,
                subject: "Find someone to laugh with today.",
                senderName: "Match.com",
                receivedDate: "March 25",
                read: false
            },
            12: {
                id: 12,
                subject: "laugh Around This Weekend!",
                senderName: "laughingWeekend",
                receivedDate: "March 26",
                read: false
            },
            13: {
                id: 13,
                subject: "Need laugh help? We can help.",
                senderName: "laugh Help",
                receivedDate: "March 26",
                read: false
            },
            14: {
                id: 14,
                subject: "Introducing the laugh plug. Stop laughing today!",
                senderName: "laugh Plug",
                receivedDate: "March 26",
                read: false
            },
            15: {
                id: 15,
                subject: "laugh Forever - the cologne",
                senderName: "laugh Forever",
                receivedDate: "March 28",
                read: false
            },
            16: {
                id: 16,
                subject: "Learn to be your best laugher, TODAY!",
                senderName: "Karen Valentine",
                receivedDate: "March 28",
                read: false
            },
            17: {
                id: 17,
                subject: "laugh in a class TOMORROW! What are you waiting for?",
                senderName: "GrouponDeals",
                receivedDate: "March 28",
                read: false
            },
            18: {
                id: 18,
                subject: "laughTown, coming to San Jose this weekend!",
                senderName: "laughTown Promotions",
                receivedDate: "March 29",
                read: false
            }
        }
    }
)

