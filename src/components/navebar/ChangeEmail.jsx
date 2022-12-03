import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Login from '../log/Login';
import { useStore } from '../../context/Store';

export default function ChangeEmail() {
  const { chaneEmail, setchaneEmail, changeEmailFun } = useStore();

  return (
    <div>
      <Dialog open={chaneEmail} onClose={changeEmailFun}>
        <DialogTitle>Change Email</DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
      </Dialog>
    </div>
  );
}
