// Avatar Component
// --------------------------------------------------------

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const ImgDummy = `https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png`;

const AvatarUploader = ({
  className,
  size,
  image,
  name,
  icon,
  initial,
  variant,
  bgColor,
  hasBadge,
  setImage
}) => {
  const classNames = classname(
    'a-avatar cursor-pointer',
    className,
    icon,
    variant,
    initial,
    bgColor,
    {
      'size-40': size === '40',
      'size-64': size === '64',
      'size-80': size === '80',
      'size-100': size === '100',
      'size-128': size === '128'
    },
    {
      'has-badge': hasBadge
    }
  );

  // const data = useSelector(state => state.preferences.preferences)
  const uploadImage = useRef(null);

  const getBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      cb(reader.result);
    };
    reader.onerror = (_error) => {};
  };

  const handlePreview = (e) => {
    getBase64(e.target.files[0], (result) => {
      setImage(result);
    });
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        ref={uploadImage}
        name={name}
        style={{ display: 'none' }}
        onChange={handlePreview}
      />
      <div className={classNames} onClick={() => uploadImage.current.click()}>
        <img src={image || ImgDummy} alt={name} />
      </div>
    </>
  );
};

AvatarUploader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  initial: PropTypes.string,
  variant: PropTypes.string,
  bgColor: PropTypes.string,
  hasBadge: PropTypes.bool,
  setImage: PropTypes.func
};

AvatarUploader.defaultProps = {
  className: '',
  size: '',
  image: '',
  name: '',
  icon: '',
  initial: '',
  variant: '',
  bgColor: 'primary100',
  hasBadge: false,
  setImage: () => {}
};

export default AvatarUploader;
