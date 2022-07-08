import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Button } from '../../Common/Button';
import { getOptions } from '../../../services/OptionList.service';
import { Option, Indicator } from '../../models';

interface Props {
  changeStep: React.Dispatch<React.SetStateAction<Indicator>>
}
export function OptionList({ changeStep }: Props):JSX.Element {
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const getData = async ():Promise<Option[]> => {
    const response = await getOptions();
    return response.data;
  };

  useEffect(() => {
    getData()
      .then((res) => {
        // setTimeout added to show Skeleton effect
        setTimeout(() => { setOptions(res); }, 1200);
      });
  }, []);

  const selectOption = (value:string):void => {
    setSelectedOption(value);
  };

  return (
    <>
      <h2 className="primary-title">Para comenzar seleccioná una de las siguientes opciones.</h2>
      {options.length === 0 && (
        <>
          <Skeleton sx={{ marginBottom: 2 }} variant="rectangular" width="100%" height={97} />
          <Skeleton sx={{ marginBottom: 2 }} variant="rectangular" width="100%" height={97} />
          <Skeleton sx={{ marginBottom: 6 }} variant="rectangular" width="100%" height={97} />
        </>
      )}
      {options.map((option : Option) => {
        const { value, label, image } = option;
        return (
          <button
            type="button"
            key={value}
            className={`item-option ${selectedOption === value ? 'active' : ''}`}
            onClick={() => selectOption(value)}
          >
            <img src={image} alt={label} />
            <p>{label}</p>
            <img src="./assets/icon-chevron-right.svg" alt="icon-arrow-right" />
          </button>
        );
      })}
      <Button
        disabled={!selectedOption}
        text="siguiente"
        action={() => changeStep({ status: true, optionValue: selectedOption })}
        type="button"
      />
    </>
  );
}
