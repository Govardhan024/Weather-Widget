import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {

    const INIT_URL = "https://images.unsplash.com/36/STzPBJUsSza3mzUxiplj_DSC09775.JPG?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
    const Hot_Url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const cold_Url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const rainy_url="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjBzZWFzb258ZW58MHx8MHx8fDA%3D";

    return (
        <div className="Infobox">
            <h1>Weather-Info: {info.weather}</h1>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? rainy_url:info.temp>15 ? Hot_Url : cold_Url}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        
                        {info.humidity > 80 ? <ThunderstormIcon/>:info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature={info.temp}&deg;C</p>
                        <p>Humidity={info.humidity}</p>
                        <p> Min Temp={info.tempMin}&deg;C</p>
                        <p> Max Temp={info.tempMax}&deg;C</p>
                        <p>The Weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}