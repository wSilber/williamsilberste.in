import React, { useState } from 'react';
import {
    Box,
    useMediaQuery
  } from '@chakra-ui/react'

import { motion } from 'framer-motion'

import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';
import Footer from './Footer';

function MainComponent(props) {

    const toggle = props.toggle
    const loaded = props.loaded

    const [show, setShow] = useState(props.toggle)
    const [isMobile] = useMediaQuery("(min-width: 768px)")

  return (
    <>
        <motion.div
        hidden={false}
        initial={show}
        onAnimationStart={() => setShow(show)}
        onAnimationComplete={() => setShow(!show)}
        delay={'1s'}
        transition={'linear'}
        animate={{ width: toggle & isMobile ? '80vw' : '100vw'}}
        style={{
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
          zIndex: '-1',
          visibility: loaded? 'visible' : 'hidden'
        }}
      >
        <InsideContent />
      </motion.div>
    </>
    
  );
}

function InsideContent() {
    return (
      <>
        <Box 
          w={'full'} 
          h={'100vh'} 
          zIndex={'-1'}
        >
        </Box>
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <Footer />
      </>
      
    )
}

export default MainComponent;
