import React, { useState, useEffect } from 'react';
import { BgBoardBox, BgBoardImgBox } from './style';
import { useRecoilValue } from 'recoil';
import { nowWeatherAtom } from '../../store/store';

interface BgBoardType {
  hour: Number;
}

const BgBoard = ({ hour }: BgBoardType) => {
  const recoilWeatherBg = useRecoilValue(nowWeatherAtom);
  const [opacityCode, setOpacityCode] = useState<Number>(0);
  // hour : 0 ~ 12 ~ 24
  // opacity : 100% ~ 0% ~ 100%
  // 12:00를 0에 수렴하도록 계산.
  const oneHour = Math.round((1 / 12) * 100) / 100; // 0.08
  useEffect(() => {
    setOpacityCode(Math.abs(Number(hour) - 12) * oneHour);
  }, [opacityCode]);

  return (
    <>
      <BgBoardImgBox
        className={recoilWeatherBg.weatherDetail.replaceAll(' ', '-').toLowerCase()}
      ></BgBoardImgBox>
      <BgBoardBox style={{ opacity: Number(opacityCode) }}></BgBoardBox>
    </>
  );
};
export default BgBoard;
