import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Login from '../navbar/Login';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div >
        <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClickOpen}
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
      <Dialog fullWidth='true' open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle style={{backgroundColor:'#0E1521', color:'white'}} className='text-center' id="form-dialog-title">Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Login />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
