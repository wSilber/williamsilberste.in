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
          w={'full'}
          position={'absolute'}
          top={0}
          
        >
          <Box
            textAlign={'left'}
          >
          <Text 
              lineHeight={1}
              className={'header-text-1'} 
              fontWeight={'bold'}
              fontSize={{lg: '7xl', md: '6xl', sm: '5xl', base: '4xl'}}
              textAlign={'left'}
              color={'gray.800'}
              fontFamily={'-apple-system, BlinkMacSystemFont'}
            >
             Hi
           </Text>
           <Text 
              lineHeight={1}
              className={'header-text-2'} 
              fontWeight={'bold'}
              textAlign={'left'}
              fontSize={{lg: '7xl', md: '6xl', sm: '5xl', base: '4xl'}}
              color={'gray.800'}
              fontFamily={'-apple-system, BlinkMacSystemFont'}
            >
             I'm William Silberstein
           </Text>
           <Text 
              lineHeight={1}
              className={'header-text-3'} 
              fontWeight={'bold'}
              textAlign={'left'}
              fontSize={{lg: '5xl', md: '4xl', sm: '2xl', base: 'xl'}}
              color={'gray.600'}
              fontFamily={'-apple-system, BlinkMacSystemFont'}
            >
             Software Developer and Engineer
           </Text>
          </Box>
           

       </Flex>

      </>
    )
  }

export default HomeSection;