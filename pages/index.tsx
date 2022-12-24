import React, { useState, useEffect } from 'react';
import { getWeatherInfo, getGeoCode } from '../api/api';
import dayjs from 'dayjs';
import DataInfo from '../components/dataInfo';
import BgBoard from '../components/bgBoard';
import Loading from '../components/loading';
import ErrorBox from '../components/error';
import { useRecoilState } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom, locationAtom } from '../store/store';

const Index = () => {
  const [isLoading, setLoading] = useState<Boolean>(true);
  const [isError, setError] = useState<Boolean>(false);
  const [isHH, setHH] = useState<Number>(0);
  const [useLocation, setUseLocation] = useRecoilState(currentLocation);
  const [isNowTimeAtom, setNowTimeAtom] = useRecoilState(nowTimeAtom);
  const [isNowWeatherAtom, setNowWeatherAtom] = useRecoilState(nowWeatherAtom);
  const [isNowWeatherData, setNowWeatherData] = useState<any>(null);
  const [isPosition, setPosition] = useRecoilState(locationAtom);

  const getInfoWeather = async (lat: Number, lon: Number) => {
    try {
      const response = await getWeatherInfo(lat, lon);
      await setNowWeatherData(response);
      await weatherDataSet();
      const responseGeo = await getGeoCode(lat, lon);
      setError(false);
      setLoading(false);
      setUseLocation(
        responseGeo.data.response.result[0].structure.level1 +
          ` ` +
          responseGeo.data.response.result[0].structure.level2
      );
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const setWeatherInfo = async () => {
    try {
      await navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        getInfoWeather(Number(position.coords.latitude), Number(position.coords.longitude));
        setPosition({
          lat: Number(position.coords.latitude),
          lng: Number(position.coords.longitude),
        });
      });
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const weatherDataSet = () => {
    const data = isNowWeatherData.data;
    // setUseLocation(data.name);
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
