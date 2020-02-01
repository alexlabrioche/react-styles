import React from 'react';
import { Link } from 'react-router-dom';

function Appbar() {
  return (
    <nav>
      <Link to="/">Accueil (JSS)</Link>
      <Link to="/css-sass">CSS/SASS</Link>
      <Link to="/css-in-js">CSS in JS</Link>
      <Link to="/ui-framework">UI Framework</Link>
    </nav>
  );
}

export default Appbar;
