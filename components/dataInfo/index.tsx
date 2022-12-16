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
        <dl>
          <dt>
            <strong>{recoilLocation}</strong>
          </dt>
          <dd>
            <span>Search Time : {recoilNowTime}</span>
          </dd>
        </dl>
      </DataInfoBox>
      <DataInfoBox>
        <dl>
          <dt>
            <strong>{recoilNowWeather.weatherState}</strong>
          </dt>
          <dd>
            <span>{recoilNowWeather.weatherDetail}</span>
          </dd>
        </dl>
      </DataInfoBox>
    </>
  );
};
export default DataInfo;
