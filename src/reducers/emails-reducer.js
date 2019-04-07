import { handleActions } from "redux-actions";
import {
    SET_ACTIVE_EMAIL,
    DELETE_EMAIL,
    SEND_EMAIL,
    FAVORITE_EMAIL,
    UNFAVORITE_EMAIL
} from "../actions/types";
import { generateEmail, generateId } from "./utils";

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
                    ...payload.email,
                    read: true         
                }       
            }
        },
        [FAVORITE_EMAIL] : (state, {payload}) => {
            const { id } = payload;
            return {
                ...state,
                emails: {
                    ...state.emails,
                    [id]: {
                        ...state.emails[id],
                        favorite: true
                    }
                }
            }
        },

        [UNFAVORITE_EMAIL] : (state, {payload}) => {
            const { id } = payload;
            return {
                ...state,
                emails: {
                    ...state.emails,
                    [id]: {
                        ...state.emails[id],
                        favorite: false
                    }
                }
            }
        },

        [DELETE_EMAIL] : (state, { payload }) => {
            const { id } = payload;
            const newState = Object.assign({}, state);
            newState.deleted[id] = newState.emails[id];
            delete newState.emails[id];
            return {
                ...newState
            };
        },
        [SEND_EMAIL] : (state, { payload }) => {
            const { subject, body } = payload;
            const newState = Object.assign({}, state);
            const id = generateId(state);
            const date = new Date();
            const newEmail = {
                id: id,
                subject,
                body,
                senderName: 'Angela C',
                senderEmail: 'angela@gmail.com',
                receivedDate: date.toString(),
                read: false,
                category: "primary"
            };
            return {
                ...newState,
                emails: {
                    [id]: {
                        ...newEmail
                    },
                    ...newState.emails
                },
                sent: {
                    [id]: {
                        ...newEmail
                    },
                    ...newState.sent
                }
            }
        },
    },

    {
        activeEmail: {
            id: 1,
            subject: "Angela, welcome to your new Google Account",
            body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
            senderName: "Google",
            senderEmail: "no-reply@accounts.google.com",
            receivedDate: "Wed Mar 27 2019 21:36:22 GMT-0700 (Pacific Daylight Time)",
            read: true,
            favorite: true,
            category: "primary"
        },
        deleted: {},
        sent: {},
        emails: {
            1: {
                id: 1,
                subject: "Angela, welcome to your new Google Account",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 21",
                read: false,
                favorite: true,
                category: "primary"
            },
            2: {
                id: 2,
                subject: "Critical security alert",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 22",
                read: false,
                favorite: true,
                category: "primary"
            },
            3: {
                id: 3,
                subject: "Angela, your 2018 Corolla is due for a service.",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Toyota",
                receivedDate: "March 23",
                read: false,
                favorite: false,
                category: "primary"
            },
            4: {
                id: 4,
                subject: "STOP LAUGHNG NOW, LEARN HOW!",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 23",
                read: false,
                favorite: false,
                category: "primary"
            },
            5: {
                id: 5,
                subject: "Everyone around you keep laughing? Click this email",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 24",
                read: false,
                favorite: false,
                category: "primary"
            },
            6: {
                id: 6,
                subject: "Angela, stop laughing today. We can show you how.",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 24",
                read: false,
                favorite: false,
                category: "primary"
            },
            7: {
                id: 7,
                subject: "Driving people away because of your laughter? We can change that.",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Google",
                receivedDate: "March 24",
                read: false,
                favorite: false,
                category: "primary"
            },
            8: {
                id: 8,
                subject: "PLEASE LAUGH TODAY :)",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "LaughToday",
                receivedDate: "March 24",
                read: false,
                favorite: false,
                category: "primary"
            },
            9: {
                id: 9,
                subject: "New Lease Deals on the 2019 GLE350",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Mercedes-Benz",
                receivedDate: "March 25",
                read: false,
                favorite: false,
                category: "primary"
            },
            10: {
                id: 10,
                subject: "Laughter has no age",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "TimelessLaughter",
                receivedDate: "March 25",
                read: false,
                favorite: false,
                category: "primary"
            },
            11: {
                id: 11,
                subject: "Find someone to laugh with today.",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Laugh.com",
                receivedDate: "March 25",
                read: false,
                favorite: false,
                category: "primary"
            },
            12: {
                id: 12,
                subject: "Laugh Around This Weekend!",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "LaughingWeekend",
                receivedDate: "March 26",
                read: false,
                favorite: false,
                category: "primary"
            },
            13: {
                id: 13,
                subject: "Need laugh help? We can help.",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Laugh Help",
                receivedDate: "March 26",
                read: false,
                favorite: false,
                category: "social"
            },
            14: {
                id: 14,
                subject: "Introducing the Laugh Plug. Stop laughing today!",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Laugh Plug",
                receivedDate: "March 26",
                read: false,
                favorite: false,
                category: "primary"
            },
            15: {
                id: 15,
                subject: "Laugh Forever - the cologne",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Laugh Forever",
                receivedDate: "March 28",
                read: false,
                favorite: false,
                category: "social"
            },
            16: {
                id: 16,
                subject: "Learn to be your best laugher, TODAY!",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "Karen Valentine",
                receivedDate: "March 28",
                read: false,
                favorite: false,
                category: "primary"
            },
            17: {
                id: 17,
                subject: "laugh in a class TOMORROW! What are you waiting for?",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "GrouponDeals",
                receivedDate: "March 28",
                read: false,
                favorite: false,
                category: "primary"
            },
            18: {
                id: 18,
                subject: "LaughTown, coming to San Jose this weekend!",
                body: "The password for your Google account angelalaughs247@gmail.com was changed. If you didn't change it, you should recover your account.",
                senderName: "LaughTown Promotions",
                receivedDate: "March 29",
                read: false,
                favorite: false,
                category: "primary"
            }
        }
    }
)

