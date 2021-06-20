import { createContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./actionTypes";
import firebase from "firebase/app";
import "firebase/auth";
import { isAdmin, setLoggedInUser } from "./actions";

const GlobalContext = createContext();

const initialState = {
    loggedInUser: {},
    services: [],
    reviews: [],
    orders: [],
    bookings: [],
    selectedService: {},
    isAdmin: false
}

export const GlobalProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case ACTIONS.SET_LOGGED_IN_USER:
                return {
                    ...state,
                    loggedInUser: action.payload
                }
            case ACTIONS.FETCH_SERVICES:
                return {
                    ...state,
                    services: action.payload
                }
            case ACTIONS.FETCH_REVIEWS:
                return {
                    ...state,
                    reviews: action.payload
                }
            case ACTIONS.SELECTED_SERVICE:
                return {
                    ...state,
                    selectedService: state.services.filter(service => service._id === action.payload)
                }
            case ACTIONS.CHECK_ADMIN:
                return {
                    ...state,
                    isAdmin: action.payload
                }
            case ACTIONS.FETCH_BOOKING:
                return {
                    ...state,
                    bookings: action.payload
                }
            case ACTIONS.FETCH_ORDER:
                return {
                    ...state,
                    orders: action.payload
                }
            case ACTIONS.DELETE_SERVICE: {
                return {
                    ...state,
                    services: state.services.filter(service => service._id !== action.payload)
                }
            }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    img: user.photoURL
                }
                dispatch(setLoggedInUser(userInfo));
            } else {
                dispatch(setLoggedInUser({}));
            }
        });
    }, [])

    const email = state.loggedInUser.email;

    useEffect(() => {
        fetch('https://travel-guides.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch(isAdmin(data));
                }
            })
    }, [email, dispatch])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;