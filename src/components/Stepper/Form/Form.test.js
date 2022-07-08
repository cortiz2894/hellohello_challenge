import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';
import { sendMailMock } from 'axios';
import { Form } from './Form';

describe('<Form/>', () => {
  let component;
  let inputEL;
  let buttonEl;

  beforeEach(() => {
    component = render(<Form />);
    inputEL = screen.getByLabelText('Correo electrónico');
    buttonEl = screen.getByText('enviar');
  });

  test('renders content', () => {
    expect(component.getByText('Para terminar completá el siguiente formulario.')).toBeInTheDocument();
  });

  test('render mail format error', async () => {
    fireEvent.change(inputEL, { target: { value: 'algo' } });
    fireEvent.click(buttonEl);

    const errorEl = await screen.findByText('Por favor, ingresa un correo electrónico válido.');

    screen.debug();
    expect(errorEl).toBeInTheDocument();
  });

  test('render required mail error', async () => {
    fireEvent.click(buttonEl);

    const errorEl = await screen.findByText('Debe ingresar el correo electronico para continuar.');

    screen.debug();
    expect(errorEl).toBeInTheDocument();
  });

  test('render loading', async () => {
    fireEvent.change(inputEL, { target: { value: 'cortiz2894@gmail.com' } });
    fireEvent.click(buttonEl);

    const loadingEl = await screen.findByRole('progressbar');

    screen.debug();
    expect(loadingEl).toHaveStyle('width: 20px; height: 20px; color: white; margin-left: 10px;');
  });

  test('render success', async () => {
    const mockedAxios = sendMailMock;
    const data = { error: false, message: 'Éxito.' };
    fireEvent.change(inputEL, { target: { value: 'cortiz2894@gmail.com' } });

    fireEvent.click(buttonEl);

    await mockedAxios.post.mockReturnValueOnce(data);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });
});
