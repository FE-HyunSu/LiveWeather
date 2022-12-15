import React, { useState, useEffect } from 'react';
import { DataInfoBox } from './style';
import { useRecoilValue } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../../store/store';

const DataInfo = () => {
  const [colorCode, setColorCode] = useState<String>('#fff');
  const recoilLocation = useRecoilValue(currentLocation);
  const recoilNowTime = useRecoilValue(nowTimeAtom);
  const recoilNowWeather = useRecoilValue(nowWeatherAtom);

  useEffect(() => {
    // console.log('test');
  }, []);

  return (
    <>
      <DataInfoBox>
        <h1>
          <strong>{recoilLocation}</strong>
          <span>{recoilNowTime}</span>
        </h1>
      </DataInfoBox>
      <DataInfoBox>
        <h1>
          <strong>{recoilNowWeather.weatherState}</strong>
          <span>{recoilNowWeather.weatherDetail}</span>
        </h1>
      </DataInfoBox>
    </>
  );
};
export default DataInfo;
