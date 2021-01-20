import React from 'react'
import { Forecast } from './styles'

const Weather = ({
    weather: {
        weather: [{description}],
        main: {temp, feels_like, temp_min, temp_max},
        wind: {speed}
    }
}) => (
    <Forecast>
          <p><strong><span aria-label="thermometer" role="img">🌡</span> Today's forecast (NYC):</strong> {description}.</p> 
          
          <p>It is currently {temp}°F <em>(feels like {feels_like}°F)</em>.</p>
          
          <p>Prepare for a high of {temp_max}°F, low of {temp_min}°F,
          and {speed} mph wind.</p>
    </Forecast>
)

export default Weather