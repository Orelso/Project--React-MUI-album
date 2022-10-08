import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CardMedia } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    
  };
  

export default function BasicModal() {
  const [open, setOpen] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} onClose={handleClose}>View</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
<Box sx={style}>
         <CardMedia 
            sx={{paddingTop: '100%'}}
            image="https://lorempokemon.fakerapi.it/pokemon"
            title="Image title"
        />
        </Box>
      </Modal>
    </div>
  );
}

