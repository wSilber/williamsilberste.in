import React, { useState } from 'react';
import {
    Box,
    Collapse,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react'

  import { motion } from 'framer-motion'

function MainComponent(props) {

    const toggle = props.toggle

    const [show, setShow] = useState(props.toggle)
    const [isMobile] = useMediaQuery("(min-width: 768px)")

    const { getDisclosureProps, isOpen } = useDisclosure()

    console.log(toggle)


  return (
    <>
        <div style={{height: "1000vh"}}></div>
        
        <motion.div
        {...getDisclosureProps()}
        hidden={false}
        initial={toggle}
        onAnimationStart={() => setShow(toggle)}
        onAnimationComplete={() => setShow(!isOpen)}
        animate={{ width: toggle & isMobile ? '80vw' : '100vw', duration: 3 }}
        style={{
          background: 'red',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
          zIndex: '-1'
        }}
      >
        <Box 
            w={'full'} 
            h={'100vh'} 
            backgroundImage={'/images/header.jpg'} 
            backgroundPosition={'bottom'} 
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
            zIndex={'-1'}
        >
          End of header image
        </Box>
        <Box h={'100vh' }zIndex={'-1'}>
          Test2
        </Box>
        <Box h={'100vh'}>
          Test3
        </Box>
      </motion.div>
    </>
  );
}

export default MainComponent;
