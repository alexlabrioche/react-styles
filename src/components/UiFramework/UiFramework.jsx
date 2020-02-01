import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

function UiFramework() {
  return (
    <Container
      maxWidth={false}
      style={{
        height: '100vh',
        backgroundColor: 'SlateBlue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper elevation={3} style={{ padding: '3rem' }}>
        <Typography variant="h1" component="h2">
          Bonjour Google
        </Typography>
        <Checkbox
          checked={true}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Radio
          checked={true}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Switch
          checked={true}
          value="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Button variant="contained" color="primary">
          Clique
        </Button>
        <Slider defaultValue={30} aria-labelledby="continuous-slider" />
      </Paper>
      <p>L'implémentation React des principes "Material" de Google</p>
    </Container>
  );
}

export default UiFramework;
