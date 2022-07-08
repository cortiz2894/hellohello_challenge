import React from 'react';
import { Button } from '../../Common/Button';
import { Indicator } from '../../models';

interface Props {
    changeStep: React.Dispatch<React.SetStateAction<Indicator>>
}
export function Success({ changeStep }:Props): JSX.Element {
  return (
    <div>
      <img className="icon-success" src="./assets/icon-success.svg" alt="Confirmation icon" />
      <h2 className="primary-title">Gracias por completar nuestro formulario.</h2>
      <Button
        disabled={false}
        text="volver"
        action={() => changeStep({ status: false, optionValue: '' })}
        type="button"
      />
    </div>
  );
}
