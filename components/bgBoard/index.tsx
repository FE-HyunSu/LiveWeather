import React, { useState, useEffect } from 'react';
import { BgBoardBox, BgBoardImgBox } from './style';
import { useRecoilValue } from 'recoil';
import { nowWeatherAtom } from '../../store/store';

interface BgBoardType {
  hour: Number;
  zIndex: Number;
}

const BgBoard = ({ hour, zIndex }: BgBoardType) => {
  const recoilWeatherBg = useRecoilValue(nowWeatherAtom);
  const [opacityCode, setOpacityCode] = useState<Number>(0);
  useEffect(() => {
    setOpacityCode(
      21 <= hour || hour <= 3
        ? 0.5
        : 18 <= hour
        ? 0.4
        : 13 <= hour
        ? 0.2
        : 9 <= hour
        ? 0
        : 4 <= hour
        ? 0.3
        : 0
    );
  }, [opacityCode]);

  return (
    <>
      <BgBoardImgBox className={recoilWeatherBg.weatherState}></BgBoardImgBox>
      <BgBoardBox style={{ opacity: Number(opacityCode) }}></BgBoardBox>
    </>
  );
};
export default BgBoard;
