import React, { useState, useEffect} from 'react';

import {
    Box,
  Text
} from '@chakra-ui/react'


function ScrollText() {

    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        setHeight(window.innerHeight)
    }, [])

    console.log(height)

  return (
    <>
    <Box
        h={'100vh'}
        position={'absolute'}
    >
        <Text 
            id="scroll-text"
            position={'absolute'}
            bottom={10}
            fontWeight={'bold'}
            fontSize={{lg: '2xl', base: 'xl'}}
            style={{
                writingMode: 'vertical-lr',
            }}
        >
            
            Scroll Down &#8594;
        
        </Text>
    </Box>
    </>
  );
}

export default ScrollText;
