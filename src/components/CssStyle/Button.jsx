import React from 'react';
import './button.scss';
function Button({ variant = 'primary', ...otherProps }) {
  return (
    <button className={`button button-${variant}`} {...otherProps}>
      Clique moi !!
    </button>
  );
}

export default Button;
