import { CircularProgress } from '@mui/material';
import React from 'react';

interface Props {
    text: string
    action?: () => void
    type: 'button' | 'submit' | 'reset' | undefined
    disabled: boolean
    loading?: boolean
}

export function Button({
  text, action, type, disabled, loading,
}:Props):JSX.Element {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="btn-custom primary" type={type} onClick={action} disabled={disabled}>
      {text}
      {loading && <CircularProgress style={{ color: 'white', marginLeft: 10 }} size={20} />}
    </button>
  );
}

Button.defaultProps = { action: undefined, loading: false };
