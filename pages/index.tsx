import React, { useState, useEffect } from 'react';
import { getWeatherInfo } from '../api/api';
import dayjs from 'dayjs';
import BgBoard from '../components/bgBoard';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isLat, setLat] = useState<Number>(0);
  const [isLon, setLon] = useState<Number>(0);
  const [isHH, setHH] = useState<Number>(0);
  const [isTimer, setTimer] = useState<String>('');

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
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const timer = () => {
    setTimer(dayjs().format('YYYY년 MM월 DD일 HH:mm:ss'));
    setHH(Number(dayjs().format('HH')));
  };

  useEffect(() => {
    setWeatherInfo();
    timer();
  }, [isLoading]);

  return (
    <>
      <dl>
        <dt>현재 위치</dt>
        <dd>위도 : {String(isLat)}</dd>
        <dd>경도 : {String(isLon)}</dd>
        <dd>기준 시간 : {isTimer}</dd>
      </dl>
      <BgBoard hour={isHH} zIndex={2} />
    </>
  );
};

export default Index;
