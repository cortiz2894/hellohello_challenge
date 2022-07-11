import React, { useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Button } from '../../Common/Button';
import { Success } from '../Success/Success';
import { SnackbarMessage } from '../../Common/SnackbarMessage';
// Services
import {
  // Email
  sendEmail,
} from '../../../services/SendData.service';
// Interfaces
import { Indicator } from '../../models';

interface Props {
  option: string
  changeStep: React.Dispatch<React.SetStateAction<Indicator>>
}

export function Form({ option, changeStep }:Props): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value);
  };

  const sendData = async ():Promise<void> => {
    try {
      await sendEmail(email, option);
      setSuccessMessage(true);
    } catch (err) {
      setShowSnackbar(true);
    }
  };

  const handleSubmit = ():void => {
    setLoader(true);
    sendData();
  };

  return (
    successMessage ? (
      <Success changeStep={changeStep} />
    ) : (
      <>
        <h2 className="primary-title">Para terminar completá el siguiente formulario.</h2>
        <ValidatorForm
          onSubmit={handleSubmit}
        >
          <TextValidator
            label="Correo electrónico"
            onChange={handleChange}
            name="email"
            className="custom-input"
            value={email}
            InputLabelProps={{ shrink: true }}
            validators={['required', 'isEmail']}
            errorMessages={['Debe ingresar el correo electronico para continuar.', 'Por favor, ingresa un correo electrónico válido.']}
          />
          <Button
            disabled={false}
            text={loader ? '' : 'enviar'}
            loading={loader}
            type="submit"
          />
        </ValidatorForm>
        <SnackbarMessage open={showSnackbar} close={() => setShowSnackbar(false)} text="Ocurrio un error en la solicitud." type="error" />
      </>
    )
  );
}
