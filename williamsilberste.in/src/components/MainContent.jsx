import React from 'react';
import {
    Button,
    Box,
    HStack,
    Slide,
    useDisclosure,
  } from '@chakra-ui/react'

function MainComponent() {


  return (
    <>
        <Box 
            w={'full'} 
            h={'100vh'} 
            backgroundImage={'/images/header.jpg'} 
            backgroundPosition={'bottom'} 
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
            position={'absolute'}
            zIndex={'-1'}
        >

        </Box>
      {/* <div style={{height: '1000vh', backgroundColor: '#eee'}}>Test</div> */}
    </>
  );
}

export default MainComponent;
