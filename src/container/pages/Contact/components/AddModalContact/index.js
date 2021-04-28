import React, {useState, useEffect} from 'react';
import './style.scss';
import classname from 'classnames';
import PropTypes from 'prop-types';

import {
    AvatarUploader,
    Button,
    H3,
    InputMaterial,
    Popup,
    Notification,
    NavbarMobileContent
} from '../../../../../components';

import {useDispatch, useSelector} from 'react-redux';


const AddModalContact = ({showPopup, isModalClose, onSubmitSuccess, getContactList, postContact, getDetailContact}) => {
    const classNames = classname('form-contact-wrapper', {});

    const contact = useSelector(state => state.profile);

    const {addContactStatus} = contact

    // state
    const [isShowPopup, setShowPopup] = useState(false);
    const [dataContact, setDataContact] = useState({});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleClosePopup = () => {
        setShowPopup(false);
        isModalClose(false);
    };

    // event handler
    const inputHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setDataContact((data) => ({...data, [name]: value}));
        setErrors({});
    };

    const handleSetAvatar = (value) => {
        setDataContact((data) => ({...data, photo: value}));
    };

    const submitAddContact = () => {
        dispatch(postContact(dataContact));
        if (addContactStatus != null) {
            alert(addContactStatus.message)
        } else {
            dispatch(getContactList({}));
            onSubmitSuccess(true)
        }
    };

    useEffect(() => {
        setShowPopup(showPopup);
    }, [showPopup]);

    return (
        <Popup
            maxSize="modal-contact"
            showPopup={isShowPopup}
            onClickClosePopup={handleClosePopup}
        >
            <div className="d-hide">
                <NavbarMobileContent
                    title="Tambah Contact"
                    actionBack={handleClosePopup}
                />
            </div>
            <H3 className="m-hide">Add Contact</H3>
            {Object.keys(errors).length ? (
                <Notification
                    status="error"
                    title="Lengkapi data dan pastikan telah memasang avatar"
                />
            ) : null}
            <div className={classNames}>
                <div className="avatar">
                    <AvatarUploader
                        className="upload-avatar"
                        size="100"
                        name="avatar"
                        image={dataContact.photo}
                        setImage={handleSetAvatar}
                    />
                </div>
                <InputMaterial
                    label="FirstName"
                    name="firstName"
                    onChange={inputHandler}
                    value={dataContact.firstName}
                    errorMessage={errors.firstName}
                />
                <InputMaterial
                    label="LastName"
                    name="lastName"
                    onChange={inputHandler}
                    value={dataContact.lastName}
                    errorMessage={errors.lastName}
                />
                <InputMaterial
                    label="Age"
                    name="age"
                    onChange={inputHandler}
                    value={dataContact.age}
                    errorMessage={errors.age}
                />
                <InputMaterial
                    label="Photo"
                    name="photo"
                    onChange={inputHandler}
                    value={dataContact.photo}
                    errorMessage={errors.photo}
                />

                <Button
                    className="form-contact-wrapper--button"
                    variant="primary"
                    onClick={submitAddContact}
                >
                    Save
                </Button>
            </div>
        </Popup>
    );
};

AddModalContact.propTypes = {
    showPopup: PropTypes.bool,
    isModalClose: PropTypes.func,
    onSubmitSuccess: PropTypes.func
};

AddModalContact.defaultProps = {
    showPopup: false,
    isModalClose: () => {
    },
    onSubmitSuccess: () => {
    }
};

export default AddModalContact;
