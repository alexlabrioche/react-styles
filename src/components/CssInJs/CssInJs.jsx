import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const PageWrapper = styled.div`
  background-color: DarkOrchid;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  strong {
    font-size: 2rem;
  }
`;

function CssInJs() {
  const [isSecondary, setIsSecondary] = React.useState(false);

  function handleButton() {
    setIsSecondary((prevState) => !prevState);
  }
  return (
    <PageWrapper>
      <Button secondary={isSecondary} onClick={handleButton}>
        Clique moi si t'ose !!
      </Button>
      <p>
        <strong>Intéragi sur ton CSS avec des variables Javascript</strong>
        <br /> Styled components est créé et pensé pour React
        <br />
        Ré-utilisation de composants sur mesures
      </p>
    </PageWrapper>
  );
}

export default CssInJs;
