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

// function EducationBox({education}) {

//     return (
//         <Card maxW='sm' backgroundColor={'gray.200'} boxShadow={'dark-lg'}>
//         <CardBody>
//             <Center>
//             <Image
//                 src={education.logo}
//                 alt='WashU Education Image'
//             />
//             </Center>

//             <Stack mt='6' spacing='3'>
//             <Heading size='md'>{education.title}</Heading>
//             <Text whiteSpace={'normal'}>
//                 {education.text}
//             </Text>
//             <Text color='gray.800' fontSize='2xl'>
//                 {education.date}
//             </Text>
//             </Stack>
//         </CardBody>
//         <Divider />
//         <CardFooter>
//             <Button variant='solid' backgroundColor={'gray.800'} color={'gray.300'}>
//                 Learn More
//             </Button>
//         </CardFooter>
//         </Card>
//     )
// }

export default EducationSection;