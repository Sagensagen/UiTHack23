import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import NokiaBackground from "./images/nokia/nokia_background_shadow.svg";
import NumberKeyPad from "./components/keyboard/keyboard_component"

function App() {  
  return (
    <div>
      <Grid container justify="center" alignItems="center">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr',
          gridTemplateAreas: 'overlap'
        }}>
          <Grid container justify="center" alignItems="center" style={{ zIndex: '1', gridArea: 'overlap' }} >
            <img alt="" src={NokiaBackground} style={{ height: "700px", width: "100%", zIndex: '1', gridArea: 'overlap' }} />
          </Grid>

          <Grid container justify="center" alignItems="center" style={{ zIndex: '1', gridArea: 'overlap' }} >
            <NumberKeyPad style={{ zIndex: '1', gridArea: 'overlap' }} />
          </Grid>
        </div>
      </Grid>
    </div >

  )
}

export default App;