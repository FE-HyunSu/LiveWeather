import React, { useState, useEffect } from 'react';
import Sample from '../components/sample/body';
import { getWeatherInfo } from '../api/api';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(true);
  const [isLat, setLat] = useState<Number>(0);
  const [isLon, setLon] = useState<Number>(0);

  const askForCoords = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(Number(position.coords.latitude.toFixed(2)));
      setLon(Number(position.coords.longitude.toFixed(2)));
      setLoading(false);
    });
  };

  const getInfoWeather = () => {
    if (isLat !== 0 && isLon !== 0) {
      console.log(getWeatherInfo(isLat, isLon));
    } else {
      console.log('0 0');
    }
  };

  useEffect(() => {
    askForCoords();
    console.log(isLat);
    console.log(isLon);
    getInfoWeather();
  }, [isLoading]);

  return (
    <>
      <Sample />
    </>
  );
};

export default Index;
