import React from 'react';
import {
    Box,
    Center,
    Heading,
    Image,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react'

const educations = {
    washU: {
        logo: '/images/washULogo.png',
        title: 'Washington University in St. Louis',
        date : '2019 - 2023'
    },
    washu: {
        logo: '/images/greeleyLogo.png',
        title: 'Horace Greeley High School',
        date : '2015 - 2019'
    },

}

function EducationSection() {

    return (
      <>

      <Box 
        borderRadius={'2xl'} 
        backgroundColor={'gray.300'}
        whiteSpace={'normal'}
        margin={'3'}
        id={'Education'}
      >
        <Center>
            <Heading pt={'10'} whiteSpace={'normal'}>Education</Heading>
        </Center>
        <VStack 
          w={'full'} 
          p={'4'} 
          maxW={'full'}
          spacing={'10'}
        >
            {
                Object.keys(educations).map(education => (
                    <EducationBox education={educations[education]} key={education} />
                ))
            }
            
        </VStack>
      </Box>
      </>
    )
  }

  function EducationBox({education}) {

    return (
        <Box
            borderRadius={'2xl'}
            backgroundColor={'gray.800'}
            w={'full'}
            transform={'scale(1)'}
            transition={'.5s'}
            _hover={{
                transform: 'scale(1.02)',
                cursor: 'pointer'
            }}
          >
            <Stack 
                direction={['column', 'row']} 
                w={'full'} 
                p={'4'} 
                maxW={'full'}
                spacing={'10'}
                display={'flex'}
                alignItems={'center'}
            >
                <Image
                    src={education? education.logo : ''}
                    w={{ base: '300px', sm: '200px' }}
                    alt={education? education.title : ''}
                />

                <VStack
                    alignItems={'flex-start'}
                >
                    <Text
                    color={'gray.300'}
                    fontSize={{base: '4xl', xl: '4xl', lg: '2xl', md:'2xl', sm: '2xl'}}
                    whiteSpace={'normal'}
                    >
                        {education? education.title : ''}
                    </Text>
                    <Text
                        color={'gray.300'}
                        fontSize={{base: '2xl', xl: '2xl', lg: 'xl', md:'lg', sm: 'lg'}}
                    >
                        {education? education.date : ''}
                    </Text>
                </VStack>
            </Stack>
          </Box>
    )
}

export default EducationSection;