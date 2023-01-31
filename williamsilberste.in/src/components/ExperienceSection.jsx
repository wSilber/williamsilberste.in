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

const about_me_text = `

  My name is William Silberstein and I am currently completing two degrees in Computer Engineering and Computer Science at Washington University in St. Louis.
  I have a passion for building software, particularly in building backend systems and networking solutions.

`

const experiences = {
    rithmic: {
        logo: '/images/rithmic-logo.png',
        title: 'Software Developer Intern | Rithmic LLC',
        date : 'Jun 2022 - August 2022'
    },
    washu: {
        logo: '/images/washULogo.png',
        title: 'WashU EUSS CSE Tutor',
        date : 'Feb 2020 - Present'
    },

}

function ExperienceSection() {

    return (
      <>

      <Box 
        borderRadius={'2xl'} 
        backgroundColor={'gray.300'}
        margin={'3'}
      >
        <Center>
        <Heading pt={'10'} whiteSpace={'normal'}>Experiences</Heading>
        </Center>
        <VStack 
          w={'full'} 
          p={'4'} 
          maxW={'full'}
          spacing={'10'}
        >
            {
                Object.keys(experiences).map(experience => (
                    <ExperienceBox experience={experiences[experience]} key={experience} />
                ))
            }
  
        </VStack>
      </Box>
      </>
    )
  }

function ExperienceBox({experience}) {

    return (
        <Box
            borderRadius={'2xl'}
            backgroundColor={'gray.800'}
            w={'full'}
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
                    src={experience? experience.logo : ''}
                    alt='Rithmic, LLC Logo'
                />

                <VStack
                    alignItems={'flex-start'}
                >
                    <Text
                    color={'gray.300'}
                    fontSize={{base: '4xl', xl: '4xl', lg: '2xl', md:'2xl', sm: '2xl'}}
                    whiteSpace={'normal'}
                    >
                        {experience? experience.title : ''}
                    </Text>
                    <Text
                        color={'gray.300'}
                        fontSize={{base: '2xl', xl: '2xl', lg: 'xl', md:'lg', sm: 'lg'}}
                    >
                        {experience? experience.date : ''}
                    </Text>
                </VStack>
            </Stack>
          </Box>
    )
}

export default ExperienceSection;