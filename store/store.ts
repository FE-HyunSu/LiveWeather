import { atom } from 'recoil';

export const currentLocation = atom({
  key: 'currentLocation',
  default: '',
});

export const nowTimeAtom = atom({
  key: 'nowTimeAtom',
  default: '',
});

export const nowWeatherAtom = atom({
  key: 'nowWeatherAtom',
  default: {
    weatherTemp: '',
    weatherState: '',
    weatherDetail: '',
    weatherTempMax: '',
    weatherTempMin: '',
    windDeg: '',
    windSpeed: '',
  },
});
