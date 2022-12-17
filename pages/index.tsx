import React, { useState, useEffect } from 'react';
import { getWeatherInfo } from '../api/api';
import dayjs from 'dayjs';
import DataInfo from '../components/dataInfo';
import BgBoard from '../components/bgBoard';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../store/store';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isHH, setHH] = useState<Number>(0);
  const [useLocation, setUseLocation] = useRecoilState(currentLocation);
  const [isNowTimeAtom, setNowTimeAtom] = useRecoilState(nowTimeAtom);
  const [isNowWeatherAtom, setNowWeatherAtom] = useRecoilState(nowWeatherAtom);
  const [isNowWeatherData, setNowWeatherData] = useState<any>(null);

  const getInfoWeather = async (lat: Number, lon: Number) => {
    try {
      const response = await getWeatherInfo(lat, lon);
      await setNowWeatherData(response);
      await weatherDataSet();
      setError(false);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const setWeatherInfo = async () => {
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
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

  const weatherDataSet = () => {
    const data = isNowWeatherData.data;
    setUseLocation(data.name);
    setNowWeatherAtom({
      weatherTemp: data.main.temp,
      weatherState: data.weather[0].main,
      weatherDetail: data.weather[0].description,
      weatherTempMax: data.main.temp_max,
      weatherTempMin: data.main.temp_min,
      windDeg: data.wind.deg,
      windSpeed: data.wind.speed,
    });
  };

  const timer = () => {
    setNowTimeAtom(dayjs().format('YYYY/MM/DD HH:mm:ss'));
    setHH(Number(dayjs().format('HH')));
  };

  const resetInfo = () => {
    setLoading(true);
    setWeatherInfo();
    timer();
  };

  useEffect(() => {
    setWeatherInfo();
    timer();
  }, [isLoading]);

  return (
    <>
      {isLoading && isLoading ? (
        <Loading />
      ) : isError && isError ? (
        <ErrorBox />
      ) : (
        <>
          <DataInfo resetInfo={resetInfo} />
          <BgBoard hour={isHH} />
        </>
      )}
    </>
  );
};

export default Index;
