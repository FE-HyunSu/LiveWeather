import React, { useState, useEffect } from 'react';
import { getWeatherInfo } from '../api/api';
import dayjs from 'dayjs';
import DataInfo from '../components/dataInfo';
import BgBoard from '../components/bgBoard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../store/store';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isHH, setHH] = useState<Number>(0);
  const [isTimer, setTimer] = useState<String>('');
  const [useLocation, setUseLocation] = useRecoilState(currentLocation);
  const [isNowTimeAtom, setNowTimeAtom] = useRecoilState(nowTimeAtom);
  const [isNowWeatherAtom, setNowWeatherAtom] = useRecoilState(nowWeatherAtom);

  const setWeatherInfo = () => {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        getInfoWeather(
          Number(position.coords.latitude.toFixed(2)),
          Number(position.coords.longitude.toFixed(2))
        );
      });
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const getInfoWeather = async (lat: Number, lon: Number) => {
    try {
      const response = await getWeatherInfo(lat, lon);
      setLoading(false);
      console.log(response);
      setUseLocation(response.data.name);
      // setNowWeatherAtom({
      //   weatherState: response.data.sys.weather[0].main,
      //   weatherDetail: response.data.sys.weather[0].description,
      // });
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const timer = () => {
    setNowTimeAtom(dayjs().format('YYYY/MM/DD HH:mm:ss'));
    setHH(Number(dayjs().format('HH')));
  };

  useEffect(() => {
    setWeatherInfo();
    timer();
  }, [isLoading]);

  return (
    <>
      <DataInfo />
      <BgBoard hour={isHH} zIndex={2} />
    </>
  );
};

export default Index;
