import React, { useState } from 'react'
import { Header } from './components/Header'
import { Manager } from './components/Manager'
import { Footer } from './components/Footer'
import backgroundImage from './images/cloudy2.jpg';
import styled from 'styled-components'

export const DashBoard = () => {
  const [img, setImg] = useState(backgroundImage);

  return (
    <div className="App h-100 w-100 p-2" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <Header />
      <Manager img1={(img2) => { setImg(img2) }} />
    </div>
  );
};