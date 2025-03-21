import React from 'react'
import AboutHero from './components/AboutHero'
import Timeline from './components/Timeline'
import {ProductShowcase} from './components/ProductShowcase';
import {FeatureSection} from './components/FeaturSection';
import Testimonials from './components/Testimonials';
import {Logos3} from './components/TrustedSection';
import { DirectorShowcase } from './components/DirectorShowcase';

const About = () => {
  return (
    <div>
      {/* <AboutHero /> */}
      <Timeline />
      <div className="bg-white">
  <div className='py-32 pb-0'>
    <FeatureSection/></div>
     <Logos3/>
     <DirectorShowcase/>
    </div>
    </div>
  )
}

export default About