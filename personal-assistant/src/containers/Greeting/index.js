import React, { useState, useEffect } from 'react'
import { Title } from '../Todo/styles'
import { Welcome, Loading, StyledLink } from './styles'
import Weather from "./components/Weather"

const Greeting = () => {
    const [weather, setWeather] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=new%20york%20city&appid=886705b4c1182eb1c69f28eb8c520e20&units=imperial')
            const data = await res.json()
            setWeather(data)
        }
        fetchData()
    }, [])

    return (
        <>
            <Title>Hello!</Title>
            <Welcome> 
                Welcome to your personal assistant <span aria-label="robot wave" role="img">🤖👋</span>. View the weather forecast below or review your <StyledLink to="/todo"><strong>to-do list</strong></StyledLink>. 
                Enjoy your day!
            </Welcome>
            {weather && weather.weather ? <Weather weather={weather}/> : <Loading>Loading today's forecast...</Loading>}
        </>
    )
}
  
export default Greeting