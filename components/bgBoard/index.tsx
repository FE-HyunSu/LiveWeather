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
  const [colorCode, setColorCode] = useState<String>('#fff');
  // 4:00 ~ 8:00 : #bbb;
  // 9:00 ~ 12:00 : #fff;
  // 13:00 ~ 17:00 : #eee;
  // 18:00 ~ 20:00 : #aaa;
  // 21:00 이상. or 0:00 ~ 3:00 : #000;
  useEffect(() => {
    setColorCode(
      21 <= hour || hour <= 3
        ? '#000'
        : 18 <= hour
        ? '#aaa'
        : 13 <= hour
        ? '#eee'
        : 9 <= hour
        ? '#fff'
        : 4 <= hour
        ? '#bbb'
        : '#fff'
    );
  }, []);

  return (
    <>
      <BgBoardImgBox className={recoilWeatherBg.weatherState}></BgBoardImgBox>
      <BgBoardBox
        style={{ backgroundColor: String(colorCode), zIndex: Number(zIndex) }}
      ></BgBoardBox>
    </>
  );
};
export default BgBoard;
