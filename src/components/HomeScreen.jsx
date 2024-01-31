import React, {useEffect, useState} from 'react';
function HomeScreen() {
    const [temperature,setTemperature] = useState("")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) =>
        {const gps = position.coords.latitude.toString()+ " " + position.coords.longitude.toString()
        fetch(`https://api.weatherapi.com/v1/current.json?key=f2880fdf52934b46941210135242901&q=${gps}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setTemperature(data.current.temp_c)
                document.querySelector("h1").innerHTML = temperature
            })

        })

    }, []);
    return (
        <div>
            <h1></h1>
        </div>
    );
}

export default HomeScreen;