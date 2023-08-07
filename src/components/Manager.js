import React, { useEffect, useState } from 'react';
import { Button, Input } from 'reactstrap';
import { Card1 } from './Card1';
import { Footer } from './Footer';
import { styled } from 'styled-components';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'reactstrap';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { countries } from 'countries-list';
import axios from 'axios';
import { Card2 } from './Card2';
import cloudy from '../images/cloudy2.jpg';
import sunny from '../images/cloudy.jpg';
import Rain from '../images/Rain.jpeg'


const MyInput = styled.input`
  background-color: rgba(0, 0, 0, 0.3);
  height: 35px;
  width: 250px;
  color: white;
  border-radius: 2px;
  ::placeholder {
    color: orange;
  }
`;
const MyButton = styled.button`
  background-color: orange;
  width: 90px;
  color: white;
  &:hover {
    border: 4px solid black;
    box-shadow: 2px 2px 3px white;
  }
`;

export const Manager = (props) => {
  const [input, setInput] = useState('');
  const [totalInput, setTotalInput] = useState('India');
  const [weatherData, setWeatherData] = useState({});
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const totalInputSetter = () => {
    setTotalInput(input.trim());
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case 'Clouds':
        props.img1(cloudy);
        return faCloud;
      case 'Rain':
        props.img1(Rain);
        return faCloudRain;
      case 'Clear':
      default:
        props.img1(sunny);
        return faSun;
    }}
    useEffect(() => {
      const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${totalInput}&appid=3d427f685e3bb900362cd1ba921ca807&units=metric`;
  
      axios
        .get(endpoint)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [totalInput]);
    
    
   
    return (
      <div bg>
        <div className="container m-2 ">
          <div className="search-container m-4 d-flex flex-row justify-content-center">
            <MyInput type="text" placeholder="Enter your Location" onChange={inputHandler} />
            <MyButton className="search-button" onClick={totalInputSetter}>
              Search
            </MyButton>
          </div>
          <div className="d-flex flex-row justify-content-center mb-0">
            {weatherData.weather && weatherData.weather.length > 0 && (
              <>
                <div>
                  <Card1
                    icon={getWeatherIcon(weatherData.weather[0].main)}
                    data={weatherData.weather[0].description}
                    temp={weatherData.main.temp}
                    feelsLike={weatherData.main.feels_like}
                    country={totalInput}
                    date={new Date().toLocaleString()}
                  />
                </div>
                <div className="row">
                  <Card2 temp={weatherData.main.temp_min} requiredText="Min Temp" type="°C" />
                  <Card2 temp={weatherData.main.temp_max} requiredText="Max Temp" type="°C" />
                  <Card2 temp={weatherData.main.pressure} requiredText="Pressure" />
                  <Card2 temp={weatherData.main.humidity} requiredText="Humidity" />
                  <Card2 temp={weatherData.coord.lon} requiredText="Longitude" type="°" />
                  <Card2 temp={weatherData.coord.lat} requiredText="Latitude" type="°" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

