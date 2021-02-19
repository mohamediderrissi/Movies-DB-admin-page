import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TableContainer from './containers/TableContainer';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import FormContainer from './containers/FormContainer';

const App = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <div>
        <Container fixed>
            <TableContainer />
            <FormContainer openForm={openForm} setOpenForm={setOpenForm} />
        </Container>
        <Tooltip title="Add a Movie" >
          <Fab color="primary" 
          style={{ position: 'fixed', bottom: '10px',right: '10px' }}
          onClick={() => setOpenForm(true)}
          >
            <AddIcon />
        </Fab>
        </Tooltip>
    </div>
  );
}

export default App;
