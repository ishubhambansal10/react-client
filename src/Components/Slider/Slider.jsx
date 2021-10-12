import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs/constants';
import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/math';
import './style.css';

const Slider = (props) => {
  const {altText, banners, defaultBanner, duration, height, random} = props;
  const [index, setIndex] = useState(0);
  const [initialBanner, setInitialBanner] = useState();

  useEffect(() => {
    setInterval
    return () => {
      cleanup
    }
  }, [input])

  useEffect(() => {
    setInterval(() => {
      setInitialBanner({
        initialBanner: initialBanner + 1,
      });
    }, intervalValue);
  }, ['runOnlyOnce']);
    return <h2>{` ${ } `}</h2>;
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
