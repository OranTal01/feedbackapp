import React from 'react';

import './button.scss';

const Button = ({ children, isDisabled, type, version }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  isDisabled: true,
  type: 'submit',
};

export default Button;
