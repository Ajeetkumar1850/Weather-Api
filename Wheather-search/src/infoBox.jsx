import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infoBox.css";

export default function InfoBox({ info }) {
    const img_url = "https://images.unsplash.com/photo-1564314966899-839134794c8c?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    };

    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather}</h1>
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img_url}
                            alt="weather image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Temperature: {kelvinToCelsius(info.temp)}°C
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Humidity: {info.humidity}%
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Min Temp: {kelvinToCelsius(info.tempMin)}°C
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Max Temp: {kelvinToCelsius(info.tempMax)}°C
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}