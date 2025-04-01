import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "748d775ddf6dc2292ec7d1beefe01220";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    };

    return (
        <div className='searchbox'>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    onChange={handleChange}
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                />
                <Button variant="contained" type="submit" sx={{ width: '100%' }}>
                    Search
                </Button>
            </form>
        </div>
    );
}