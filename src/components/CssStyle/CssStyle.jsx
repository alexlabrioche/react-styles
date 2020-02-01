import React from 'react';
import './styles.css';
import Button from './Button';

function CssStyle() {
  const [btnVariant, setBtnVariant] = React.useState('primary');

  function handleButton() {
    setBtnVariant((prevState) => (prevState === 'primary' ? 'secondary' : 'primary'));
  }
  return (
    <div className="cssstyle">
      <Button variant={btnVariant} onClick={handleButton} />
      <p>
        <strong>La base</strong>
        <br /> Le bundle CRA (create-react-app) accepte par défaut le css
        <br /> Pour faire du Sass il suffit d'installer le module node-sass
      </p>
    </div>
  );
}

export default CssStyle;
