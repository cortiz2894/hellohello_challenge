import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { Success } from './Success';

describe('<Success /> ', () => {
  test('renders content', () => {
    const component = render(<Success />);

    expect(component.getByText('Gracias por completar nuestro formulario.')).toBeInTheDocument();
  });

  test('click back button', () => {
    const mockHandler = jest.fn();

    const component = render(<Success changeStep={mockHandler} />);
    const button = component.getByText('volver');
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
