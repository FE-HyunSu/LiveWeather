import React from 'react';
import { DataInfoBox } from './style';
import { useRecoilValue } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../../store/store';

const DataInfo = ({ resetInfo }: any) => {
  const recoilLocation = useRecoilValue(currentLocation);
  const recoilNowTime = useRecoilValue(nowTimeAtom);
  const recoilNowWeather = useRecoilValue(nowWeatherAtom);

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
      <DataInfoBox style={{ animationDelay: `.5s` }}>
        <dl>
          <dt>
            <em>{recoilNowWeather.weatherTemp}</em>
            <strong>{recoilNowWeather.weatherState}</strong>
          </dt>
          <dd>
            <span>{recoilNowWeather.weatherDetail}</span>
          </dd>
        </dl>
      </DataInfoBox>
      <DataInfoBox style={{ animationDelay: `1s` }}>
        <div className="btn-reflesh">
          <button type="button" onClick={() => resetInfo()}>
            새로고침
          </button>
        </div>
      </DataInfoBox>
    </>
  );
};
export default DataInfo;
