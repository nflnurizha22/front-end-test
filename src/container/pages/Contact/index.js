import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './style.scss';
import classname from 'classnames';
import SweetAlert from 'react-bootstrap-sweetalert';

import {
    getContactList,
    deleteContact,
    postContact,
    putContact,
    getContactDetail
} from '../../../store/module/profile/actions'
// components
import {Navbar, SideNav} from '../../../components';
import {CardProfile, Button} from '../../../components/atoms';
import {HeaderCard} from '../../../components/molecules';

import ICList from '../../../assets/images/icons/ic-list-big.svg';
import IcAdd from '../../../assets/images/icons/ic-add.svg';

import AddModalContact from './components/AddModalContact';
import EditModalContact from './components/EditModalContact';

const Contact = () => {
    const profile = useSelector(state => state.profile);
    const {listContact = [], detailContact = {}} = profile
    const dispatch = useDispatch();
    const classNames = classname('page-wrapper', {});

    // state
    const [isModalActive, setModalActive] = useState(false);
    const [isModalEditActive, setModalEditActive] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleCloseAlert = () => {
        setAlert(false);
        setModalActive(false);
		setTimeout(() => window.location.reload(), 300);
    };

    const handleUpdateData = async data =>  {
        if (detailContact !== {}) {
        await dispatch(getContactDetail(data))
            setModalEditActive(true);
        }
    }
    useEffect(() => {
        dispatch(getContactList({}));
    }, [true]);

    return (
        <>
            <SweetAlert
                show={alert}
                success
                title="Berhasil"
                confirmBtnCssClass="a-button primary"
                onConfirm={handleCloseAlert}
            >
                Berhasil disimpan
            </SweetAlert>

            <SideNav/>
            <Navbar/>
            <div className={classNames}>
            {isModalEditActive ?  <EditModalContact
                    showPopup={isModalEditActive}
                    isModalClose={(e) => setModalEditActive(e)}
                    onSubmitSuccess={() => setAlert(true)}
                    putContact={putContact}
                    getContactList={getContactList}
                    getDetailContact={detailContact}
                />  : null}
                {isModalActive ? <AddModalContact
                    showPopup={isModalActive}
                    isModalClose={(e) => setModalActive(e)}
                    onSubmitSuccess={() => setAlert(true)}
                    postContact={postContact}
                    getContactList={getContactList}
                    getDetailContact={detailContact}
                /> : null}
                <HeaderCard className="o-contact-header__card">
                    <div>
                        <div id="title">Contact</div>
                        <Button variant="primary" size="small" onClick={() => setModalActive(true)}>
                            <img src={IcAdd} alt="ic-add" className="mr-16" />
                            Add Contact
                        </Button>
                    </div>
                </HeaderCard>

                <div className="row">
                    {listContact.data ? (
                        <div className="contact-content--exist">
                            <div className="row">
                                {
                                    listContact.data.map((item, index) => {
                                        let data = {
                                            name: `${item.firstName} ${item.lastName}`,
                                            age: item.age,
                                            photo: item.photo,
                                            id: item.id
                                        }
                                        return (
                                            <CardProfile data={data} key={index} deleteContact={deleteContact}
                                                         onUpdateContact={handleUpdateData} updateData={putContact}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="contact-content--empty">
                            <img src={ICList} alt="iconList"/>
                            <div>Belum Ada Contact</div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contact;
