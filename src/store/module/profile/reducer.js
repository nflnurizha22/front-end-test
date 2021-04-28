import {
    GET_CONTACT_LIST,
    GET_CONTACT_DETAIL,
    ADD_CONTACT,
    EDIT_CONTACT,
    CLEAR_DETAIL_CONTACT
} from '../action-type';

const initialstate = {
    listContact: [],
    detailContact: {}
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_CONTACT_LIST:
            return { ...state, listContact: action.payload }
        case GET_CONTACT_DETAIL:
            return { ...state, detailContact: action.payload }
        case ADD_CONTACT:
            return { ...state, addContactStatus: action.error }
        case EDIT_CONTACT:
            return { ...state, editContactStatus: action.error }
        case CLEAR_DETAIL_CONTACT:
            return { ...state, detailContact: {} }
        default:
            return state;
    }
}

export default reducer;
