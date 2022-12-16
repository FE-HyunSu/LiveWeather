import React, { useState, useEffect } from 'react';
import { getWeatherInfo } from '../api/api';
import dayjs from 'dayjs';
import DataInfo from '../components/dataInfo';
import BgBoard from '../components/bgBoard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../store/store';
import Loading from '../components/loading';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isHH, setHH] = useState<Number>(0);
  const [isTimer, setTimer] = useState<String>('');
  const [useLocation, setUseLocation] = useRecoilState(currentLocation);
  const [isNowTimeAtom, setNowTimeAtom] = useRecoilState(nowTimeAtom);
  const [isNowWeatherAtom, setNowWeatherAtom] = useRecoilState(nowWeatherAtom);
  const [isNowWeatherData, setNowWeatherData] = useState<any>(null);

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
      setNowWeatherData(response);
      weatherDataSet();
      // setLoading(false);
    } catch {
      // setLoading(false);
      setError(true);
    }
  };

  const weatherDataSet = () => {
    const data = isNowWeatherData.data;
    setUseLocation(data.name);
    setNowWeatherAtom({
      weatherTemp: data.main.temp,
      weatherState: data.weather[0].main,
      weatherDetail: data.weather[0].description,
    });
  };

  const timer = () => {
    setNowTimeAtom(dayjs().format('YYYY/MM/DD HH:mm:ss'));
    setHH(Number(dayjs().format('HH')));
  };

  useEffect(() => {
    setWeatherInfo();
    timer();
    console.log('isNowWeatherData', isNowWeatherData);
  }, [isLoading]);

  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : (
        <>
          <DataInfo />
          <BgBoard hour={isHH} />
        </>
      )}
    </>
  );
};

export default Index;
