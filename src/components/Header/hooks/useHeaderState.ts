import { HomePageContext } from '@src/pages/HomePage/config/domain/context';
import { getAddress } from '@src/services/apiService';
import { maskIp } from '@src/utils';
import { AxiosError } from 'axios';
import { ChangeEvent, useContext, useState } from 'react';

type Data = {
  code: number;
  messages: string;
};

export const useHeaderState = () => {
  const [inputValue, setInputValue] = useState('');
  const [disabledButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const homePageContext = useContext(HomePageContext);

  const getData = async (ip: string) => {
    try {
      homePageContext.setLoading(true);
      setErrorMessage(null);
      const data = await getAddress(ip);
      if (data) {
        const { ip, location } = data;
        homePageContext.setAddress({
          ip: ip,
          location: `${location.city}, ${location.country} ${location.geonameId}`,
          timezone: `UTC${location.timezone}`,
          isp: data.isp,
        });
      }
    } catch (error) {
      const e = error as AxiosError;
      homePageContext.setAddress({
        ip: undefined,
        location: undefined,
        timezone: undefined,
        isp: undefined,
      });

      if (e.response?.data) {
        const data = e.response.data as unknown as Data;
        return setErrorMessage(data.messages);
      }
      setErrorMessage(e.message);
    } finally {
      homePageContext.setLoading(false);
    }
  };

  const handleOnClick = async () => {
    await getData(inputValue);
  };

  const onCloseModal = () => {
    setErrorMessage(null);
  };

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
