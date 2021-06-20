import { ACTIONS } from "./actionTypes"

export const setLoggedInUser = user => {
    return {
        type: ACTIONS.SET_LOGGED_IN_USER,
        payload: user
    }
}

export const showLoggedInToast = () => {
    return {
        type: ACTIONS.SHOW_LOGGED_IN_TOAST
    }
}

export const showLoggedOutToast = () => {
    return {
        type: ACTIONS.SHOW_LOGGED_OUT_TOAST
    }
}

export const fetchServices = data => {
    return {
        type: ACTIONS.FETCH_SERVICES,
        payload: data
    }
}

export const selectedService = id => {
    return {
        type: ACTIONS.SELECTED_SERVICE,
        payload: id
    }
}

export const fetchReviews = data => {
    return {
        type: ACTIONS.FETCH_REVIEWS,
        payload: data
    }
}

export const isAdmin = boolean => {
    return {
        type: ACTIONS.CHECK_ADMIN,
        payload: boolean
    }
}

export const fetchBooking = data => {
    return {
        type: ACTIONS.FETCH_BOOKING,
        payload: data
    }
}

export const fetchOrder = data => {
    return {
        type: ACTIONS.FETCH_ORDER,
        payload: data
    }
}

export const deleteService = id => {
    return {
        type: ACTIONS.DELETE_SERVICE,
        payload: id
    }
}