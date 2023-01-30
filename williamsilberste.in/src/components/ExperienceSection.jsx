import React from 'react';
import {
    Box,
    Button,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react'

const about_me_text = `

  My name is William Silberstein and I am currently completing two degrees in Computer Engineering and Computer Science at Washington University in St. Louis.
  I have a passion for building software, particularly in building backend systems and networking solutions.

`

function ExperienceSection() {

    return (
      <>
      <Box 
        borderRadius={'2xl'} 
        borderColor={'gray.700'} 
        backgroundColor={'gray.0'}
        margin={'3'}
      >
        <VStack 
          w={'full'} 
          p={'4'} 
          maxW={'full'}
          spacing={'10'}
        >
          <Box
            borderRadius={'2xl'}
            backgroundColor={'gray.700'}
            w={'full'}
          >
            <Stack 
                direction={['column', 'row']} 
                w={'full'} 
                p={'4'} 
                maxW={'full'}
                spacing={'10'}
            >


            </Stack>
          </Box>
  
        </VStack>
      </Box>
      </>
    )
  }

export default ExperienceSection;