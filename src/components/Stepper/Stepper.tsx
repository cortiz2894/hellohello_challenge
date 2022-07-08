import React, { useState } from 'react';

import { StepContent } from './StepContent';
import { OptionList } from './OptionList/OptionList';
import { Form } from './Form/Form';
// Interfaces
import { Indicator } from '../models';
// Styles
import './Stepper.scss';

export function Stepper(): JSX.Element {
  const [stepIndicator, setStepIndicator] = useState<Indicator>({ status: false, optionValue: '' });

  return (
    <div className="stepper-container">
      <StepContent>
        {!stepIndicator.status ? (
          <OptionList changeStep={setStepIndicator} />
        ) : (
          <Form option={stepIndicator.optionValue} changeStep={setStepIndicator} />
        )}
      </StepContent>
    </div>
  );
}
