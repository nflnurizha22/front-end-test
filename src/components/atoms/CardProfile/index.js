import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Dropdown from "react-bootstrap/Dropdown";


const CardProfile = ({
                         className,
                         children,
                         title,
                         data,
                         img,
                         elevation,
                         variant,
                         style,
                         Component,
                         deleteContact,
                         onUpdateContact,
                         updateData
                     }) => {

    let getImgUrl = url => {
        if (url.includes("https") || url.includes("http")) {
            return url
        } else {
            return "http://polpp.mataramkota.go.id/themes/kenshin-kenshinschool/assets/images/default.jpg"
        }
    }
    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            className="threedots-wrapper"
            href=""
            ref={ref}
            onClick={e => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            <span className="threedots"/>
        </a>
    ));

    return (
        <div className="col-md-3 mb-3 col-sm-2">
            <div className="card profile-card">
                 <span className="option">
                       <Dropdown>
                            <Dropdown.Toggle as={CustomToggle}/>
                            <Dropdown.Menu size="sm" title="">
                                <Dropdown.Item onClick={ () => onUpdateContact(({
                                    id: data.id
                                }))}>Edit</Dropdown.Item>
                                <Dropdown.Item onClick={deleteContact({
                                    id: data.id
                                })}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                 </span>
                <div className="background-block">
                    <img
                        src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                        alt="profile-sample1" className="background"/>
                </div>
                <div className="profile-thumb-block">
                    <img src={getImgUrl(data.photo)} alt="profile-image"
                         className="profile"/>
                </div>
                <div className="card-content">
                    <h3>
                        {data.name}
                        <br/><small> Age : {data.age}</small>
                    </h3>
                </div>
            </div>
        </div>
    );
};

CardProfile.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object,
    img: PropTypes.string,
    children: PropTypes.node,
    elevation: PropTypes.bool,
    variant: PropTypes.string,
    style: PropTypes.object,
    Component: PropTypes.node
};

CardProfile.defaultProps = {
    className: '',
    title: '',
    data: {},
    img: '',
    children: '',
    elevation: false,
    variant: '',
    style: {},
    Component: ''
};

export default CardProfile;
