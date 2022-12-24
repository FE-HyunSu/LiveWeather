import axios from 'axios';
const dataKey = process.env.NEXT_PUBLIC_DATA_KEY;
const mapKey = process.env.NEXT_PUBLIC_MAP_KEY;

export const getWeatherInfo = async (lat: Number, lon: Number) => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${dataKey}&units=metric`
  );
};

export const getGeoCode = async (lat: Number, lon: Number) => {
  return await axios.get(
    `/req/address?service=address&request=getAddress&point=${lon},${lat}&type=both&zipcode=true&simple=false&key=${mapKey}`
  );
};
