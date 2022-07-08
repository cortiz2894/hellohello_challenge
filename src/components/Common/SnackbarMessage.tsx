import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

interface Props {
    text: string
    open: boolean
    close: (value: React.SetStateAction<boolean>) => void
    type: 'error' | 'success'
}

export function SnackbarMessage({
  text, open, close, type,
}:Props):JSX.Element {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={() => close(false)}>
      <MuiAlert elevation={6} variant="filled" severity={type}>
        {text}
      </MuiAlert>
    </Snackbar>
  );
}
