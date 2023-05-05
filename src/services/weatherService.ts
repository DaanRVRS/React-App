import { icon } from "@fortawesome/fontawesome-svg-core";
import { DateTime } from "luxon";

const API_KEY = "9600fabb4491b4c7da4c7bf8494e1016";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&exclude=current%2Cminutely%2Calerts&units=metric&appid=965468b797048978ad866ff2577ab5d2

// retrieves data from api
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    return fetch(url)
        .then((res) => res.json())
};


// formats current weather
const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data
    // console.log(data);

    const {main: details, icon} = weather[0];

    // console.log(data)


    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, details, icon, speed};
}


// formats forecast weather
const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    });

    hourly = hourly.slice(1,6).map(d => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    return {timezone, daily, hourly};
}


// formats results from api
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather);

    const {lat, lon} = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {lat, lon, exclude: 'current,minutely,alerts', units: searchParams.units}).then(formatForecastWeather)

    return {...formattedCurrentWeather, ...formattedForecastWeather};
}


//formats time
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a'") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



// gives url with correct icon for weather display
const iconUrlFromCode = (code) => "https://openweathermap.org/img/wn/${code}@2x.png";



export default getFormattedWeatherData;

export {formatToLocalTime, iconUrlFromCode};