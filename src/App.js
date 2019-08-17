import React from 'react'
import { Grommet, Box } from 'grommet'
import AppBar from './AppBar'
import Main from './Main'

const theme = {
    global: {
      font: {
        family: 'Roboto',
        size: '14px',
        height: '20px',
      },
    },
};


function App() {
  return (
    <Grommet theme={theme}>
        <Box fill>
            <AppBar/>
            <Main/>
        </Box>
    </Grommet>
  );
}

export default App;
