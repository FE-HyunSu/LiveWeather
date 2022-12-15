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
    weatherState: '',
    weatherDetail: '',
  },
});

export const dataSet = atom({
  key: 'dataSet',
  default: [
    {
      apiId: '',
      apiPw: '',
    },
  ],
});
