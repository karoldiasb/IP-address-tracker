import { HomePageContext } from '@src/config/domain/context';
import { getAddress, getIP } from '@src/services/apiService';
import { maskIp } from '@src/utils';
import { AxiosError } from 'axios';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

type Data = {
  code: number;
  messages: string;
};

export const useHeaderState = () => {
  const [inputValue, setInputValue] = useState('');
  const [disabledButton, setDisableButton] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const homePageContext = useContext(HomePageContext);

  const getData = async (ip: string) => {
    try {
      homePageContext.setLoading(true);
      setErrorMessage(undefined);
      const data = await getAddress(ip);

      if (data) {
        const { ip, location } = data;
        homePageContext.setAddress({
          ip: ip,
          location: `${location.city}, ${location.country} ${location.geonameId}`,
          timezone: `UTC${location.timezone}`,
          isp: data.isp,
          lat: location.lat,
          lng: location.lng,
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

  const getPublicIp = async () => {
    const ip = await getIP();
    return ip;
  };

  useEffect(() => {
    async function fetchData() {
      const ip = await getPublicIp();
      const initialIP = ip ?? '192.101.102.201';
      getData(initialIP);
    }

    fetchData();
  }, []);

  const onCloseModal = () => {
    setErrorMessage(undefined);
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
