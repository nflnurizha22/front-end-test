import {
    GET_CONTACT_LIST,
    GET_CONTACT_DETAIL,
    ADD_CONTACT,
    EDIT_CONTACT,
    CLEAR_DETAIL_CONTACT
} from '../action-type';
import axios from 'axios';

export const clearDetilContact = () => async dispatch => {
	return await dispatch({type: CLEAR_DETAIL_CONTACT});
}

export const getContactList = payload => async dispatch => {

    await axios({
        method: 'GET',
        url: 'https://simple-contact-crud.herokuapp.com/contact'
    }).then(res => {
        console.log(JSON.stringify(res.data))
        const { data } = res;
        return dispatch({ type: GET_CONTACT_LIST, payload: data });
    }).catch(error => {
        console.error(error);
        return
    })

}

export const getContactDetail = payload => async dispatch => {
    const { id } = payload;

    await axios({
        method: 'GET',
        url: 'https://simple-contact-crud.herokuapp.com/contact/' + id
    }).then(res => {
        const { data } = res;
        console.log(data)
        return dispatch({ type: GET_CONTACT_DETAIL, payload: data });
    }).catch(error => {
        return
    })

}

export const postContact = payload => async dispatch => {
    await axios({
        method: 'POST',
        url: 'https://simple-contact-crud.herokuapp.com/contact',
        data: payload,
    }).then(res => {
        return dispatch({ type: ADD_CONTACT, error: null });
    }).catch(error => {
        return dispatch({ type: ADD_CONTACT, error: error.response.data });
    })

}

export const putContact = (data) => async dispatch => {
    await axios({
        method: 'PUT',
        url: 'https://simple-contact-crud.herokuapp.com/contact/' + data.id,
        data: {
            firstname: data.firstname,
            lastName: data.lastName,
            age: data.age,
            photo: data.photo,
        }
    }).then(res => {
        return dispatch({ type: EDIT_CONTACT, error: null });
    }).catch(error => {
        return dispatch({ type: EDIT_CONTACT, error: error.response.data });
    })

}

export const deleteContact = payload => async dispatch => {
    const { id } = payload;
    await axios({
        method: 'DELETE',
        url: 'https://simple-contact-crud.herokuapp.com/contact/' + id
    }).then(res => {
        console.log(JSON.stringify(res.data))
        const { data } = res;
        return dispatch({ type: GET_CONTACT_DETAIL, payload: data });
    }).catch(error => {
        console.error(error);
        return
    })

}