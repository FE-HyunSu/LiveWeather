## 🌦 Live Weather information.

### 🧑‍💻 프로젝트 개요.

- 현재 내 위치를 기반으로, 날씨 정보를 제공.

### 👩‍🚀 구현 내용.

<img src="https://hsliveweather.netlify.app/images/img_readme.png" width="600" alt="" />

- 내 위치를 GPS기반으로 위도, 경도값을 호출. (브라우저의 위치서비스를 허용해야 함)
- 위도 경도 값으로 역지오코딩을 적용, 현재 위치의 주소 정보를 호출.
- 위도, 경도값을 기준으로 해당 위치의 날씨 정보를 공공 API를 통해 호출.
- 날씨 정보에 맞춰 관련 정보 및 이미지를 제공.
- dayjs로 라이브 시간대별 화면 밝기 적용.

### 🏂 URL [![Netlify Status](https://api.netlify.com/api/v1/badges/39ea5050-ae95-47a2-ba5c-0c01a7303a6d/deploy-status)](https://app.netlify.com/sites/hsliveweather/deploys)

- page : [https://hsliveweather.netlify.app](https://hsliveweather.netlify.app)

### 🪬 Keyword.

- `React` `Nextjs` `Typescript` `Recoil` `styled-components` `Navigator` `Reverse geocoding` `KAKAO API`
