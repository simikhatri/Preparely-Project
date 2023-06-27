import React from 'react';
import Choose from '../components/Choose';
import Hero from '../components/Hero';
import Services from '../components/Services'
import ChooseExam from '../components/ChooseExam';
import Description from '../components/Description';
import Swiiper from '../components/slider/Swiiper';

const Home = () => {
  return (
    <>
     <Hero />
      <Choose/>
     <Services/>
      <ChooseExam/>
      <Swiiper/>
      <Description/>
     
      
    </>
  )
}

export default Home
