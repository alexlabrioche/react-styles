import React from 'react';

function Home() {
  return (
    <div style={styles.home}>
      <h1 style={styles.big}>React Styles</h1>
      <p style={styles.mainText}>
        <strong>4</strong> techniques pour donner du <strong>SWAG</strong> à ton app
      </p>
    </div>
  );
}

// Méthode inline-style avec objet Javascript
// destiné aux apps React-Native ou Electron
// Présenté ici en BONUS je ne conseille pas de l'utiliser pour du web

const styles = {
  home: {
    backgroundColor: 'RebeccaPurple',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  big: {
    color: 'MediumAquamarine',
    fontSize: '10vw',
  },
  mainText: {
    fontSize: '2rem',
    textDecoration: 'underline',
  },
};

export default Home;
