import { getAddress } from '@src/services/apiService';
import { AxiosError } from 'axios';
import { ChangeEvent, useState } from 'react';

type Data = {
  code: number;
  messages: string;
};

export const useHeaderState = () => {
  const [inputValue, setInputValue] = useState('');
  const [disabledButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(
    'error message',
  );

  const getData = async (ip: string) => {
    try {
      setErrorMessage(null);
      // const ip = '192.212.174.101';
      const data = await getAddress(ip);
      console.log(data);
    } catch (error) {
      const e = error as AxiosError;
      console.log(e);
      if (e.response?.data) {
        const data = e.response.data as unknown as Data;
        setErrorMessage(data.messages);
      } else {
        setErrorMessage(e.message);
      }
    }
  };

  const handleOnClick = async () => {
    await getData(inputValue);
  };

  const onCloseModal = () => {
    setErrorMessage(null);
  };

  function maskIp(value: string) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskIp(event.target.value);
    setInputValue(maskedValue);
    setDisableButton(true);
    if (maskedValue.length == 15) {
      setDisableButton(false);
    }
  };

  return {
    inputValue,
    handleChange,
    disabledButton,
    setDisableButton,
    getData,
    errorMessage,
    handleOnClick,
    onCloseModal,
  };
};
