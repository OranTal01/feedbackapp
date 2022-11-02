import React from 'react';

import spinner from '../../../assets/spinner.gif';

import './spinner.scss';

function Spinner() {
  return <img className="spinner" src={spinner} alt="loading..." />;
}

export default Spinner;
