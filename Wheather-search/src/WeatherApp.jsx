import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: undefined,
        humidity: 64,
        temp: 293.2,
        tempMax: 293.2,
        tempMin: 293.2,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    );
}