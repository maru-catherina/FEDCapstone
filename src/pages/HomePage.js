import React from 'react';
import CallToAction from '../components/CallToAction';
import SpecialsSection from '../components/SpecialsSection';
import NavigationBar from '../components/NavigationBar';



const HomePage = () => {
  return (
    <>
    <NavigationBar/>
      <CallToAction />
      <SpecialsSection />
          </>
  );
};

export default HomePage;