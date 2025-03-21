import React from 'react'
import HomeHero from './components/HomeHero'
import ThreeScene from "./components/ThreeScene";
import {ProductShowcase} from './components/ProductShowcase';
import {FeatureSection} from './components/FeaturSection';
import Testimonials from './components/Testimonials';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
const Home = () => {
  return (
    <div>
    {/* <HomeHero/> */}
    <HeroSection/>
    <ProductShowcase />
    <StatsSection />
    
    <Testimonials />    
    </div>
  )

}

export default Home