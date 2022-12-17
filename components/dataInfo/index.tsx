import React from 'react';
import { DataInfoBox } from './style';
import { useRecoilValue } from 'recoil';
import { currentLocation, nowTimeAtom, nowWeatherAtom } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

const DataInfo = ({ resetInfo }: any) => {
  SwiperCore.use([Autoplay]);
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
        <div className="multi-box">
          <Swiper
            className="etc-info-slide"
            direction={'vertical'}
            autoHeight={true}
            // loopedSlides={1}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <p>
                max temp : <span>{recoilNowWeather.weatherTempMax}</span>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p>
                min temp : <span>{recoilNowWeather.weatherTempMin}</span>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p>
                wind deg : <span>{recoilNowWeather.windDeg}</span>
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p>wind speed : {recoilNowWeather.windSpeed}m/s</p>
            </SwiperSlide>
          </Swiper>
          <button type="button" className="btn-reflesh" onClick={() => resetInfo()}>
            새로고침
          </button>
        </div>
      </DataInfoBox>
    </>
  );
};
export default DataInfo;
