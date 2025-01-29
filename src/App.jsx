import MButton from './components/MButton'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import { IconButton } from '@mui/material';

function App() {

  return (
    <>
      <MButton startIcon={<AddBoxIcon />} title="Add" >Tambah Item</MButton>
      <br/>
      <IconButton>
        <AccessibleForwardIcon />
      </IconButton>
    </>
  )
}

export default App
