import React from 'react';
import {
    Box,
    Flex,
    Text,
  } from '@chakra-ui/react'



function HomeSection() {

    return (
      <>
        {/* <div style={{position: 'absolute', display: 'flex', justifyContent: 'center'}}>
          <h1 className={'header-text'}>1234567890</h1>
        </div> */}
       <Flex 
          alignItems={'center'}
          justifyContent={'center'}
          h={'100vh'}
        >
          <Box>
          <Text 
              className={'header-text'} 
              textAlign={'center'}
              fontSize={'5xl'}
              // animation={'typewriter 2s steps(44) 1s 1 normal both'}
            >
             0123456789
           </Text>
          </Box>
           

       </Flex>

      </>
    )
  }

export default HomeSection;