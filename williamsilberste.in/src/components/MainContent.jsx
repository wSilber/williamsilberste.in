import React from 'react';
import {
    Box,
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
            zIndex={'-1'}
        >
          End of header image
        </Box>
        <Box
          w={{ base: 'full' }}
          backgroundColor={'gray.200'}
          h={'1000vh'}
        >
          Start of Main Section
        </Box>
    </>
  );
}

export default MainComponent;
