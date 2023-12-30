import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { red } from '@mui/material/colors';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "58066c08c252209036387e2e1b1ee64a";

    let getWetherInfo = async () => {
        try {

            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonres = await response.json();
            console.log(jsonres);

            let result = {
                city: city,
                temp: jsonres.main.temp,
                tempMin: jsonres.main.temp_min,
                tempMax: jsonres.main.temp_max,
                humidity: jsonres.main.humidity,
                feelsLike: jsonres.main.feels_like,
                weather: jsonres.weather[0].description,

            };
            console.log(result);
            return result;

        } catch (err) {
            throw err;
        }

    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWetherInfo();
            updateInfo(newInfo);

        } catch (err) {
            setError(true);
        }


    }
    return (
        <div>
            <h3>Search for Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type='submit'>search</Button>
                {error && <p style={{ color: "red" }}>No such place in aur Api</p>}
            </form>
        </div>
    )
}