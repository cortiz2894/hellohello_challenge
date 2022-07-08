import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
} from '@testing-library/react';
import axiosMock from 'axios';
import { OptionList } from './OptionList';

describe('<OptionList/>', () => {
  let component;

  beforeEach(() => {
    component = render(<OptionList />);
  });

  test('render skeleton if not have options', () => {
    const skeletonElement = component.container.querySelector('span');
    expect(skeletonElement).toHaveStyle('width: 100%; height: 97px;');
  });

  test('resolve option', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [{
        image: 'https://api-demo-hh.vercel.app/images/option-a.jpg',
        label: 'Lorem Ipsum',
        value: 'A',
      }],
    });

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
  });

  test('button validation', () => {
    const buttonEl = component.getByText('siguiente');
    expect(buttonEl).toHaveAttribute('disabled');
  });
});
