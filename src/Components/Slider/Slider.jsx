import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs/constants';
import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/math';
import './style.css';

const Slider = (props) => {
  const {
    altText, banners, defaultBanner, duration, height, random,
  } = props;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = random ? getRandomNumber(banners.length)
        : getNextRoundRobin(banners.length, index);
      setIndex(newIndex);
    }, duration);
    return () => {
      clearInterval(interval);
    };
  }, [index]);
  // const imgPath = `${PUBLIC_IMAGE_FOLDER}${banners[index]}`;
  return (
    <div className="container">
      <img src={`${PUBLIC_IMAGE_FOLDER}${banners[index]}`} alt={altText} defaultBanner={defaultBanner} height={height} />
    </div>
  );
};

Slider.defaultProps = {
  altText: 'Default Banner',
  defaultBanner: DEFAULT_BANNER_IMAGE,
  duration: 2000,
  height: 200,
  random: false,
};

Slider.propTypes = {
  altText: PropTypes.string,
  banners: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultBanner: PropTypes.string,
  duration: PropTypes.number,
  height: PropTypes.number,
  random: PropTypes.bool,
};

export default Slider;
