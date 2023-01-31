import React from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Center,
    Divider,
    Heading,
    Image,
    Stack,
    Text,
    Wrap,
    WrapItem,
    VStack,
  } from '@chakra-ui/react'

const projects = {
    washU: {
        logo: '/images/washULogo.png',
        title: 'Washington University in St. Louis',
        text : 'test',
        date : '2019 - 2023'
    },
    test1: {
        logo: '/images/greeleyLogo.png',
        title: 'Horace Greeley High School',
        text : 'Test',
        date : '2015 - 2019'
    },
    test: {
      logo: '/images/washULogo.png',
      title: 'Washington University in St. Louis',
      text : 'test',
      date : '2019 - 2023'
    },
    test2: {
        logo: '/images/greeleyLogo.png',
        title: 'Horace Greeley High School',
        text : 'Test',
        date : '2015 - 2019'
    },

}

function ProjectsSection() {

    return (
      <>

      <Box 
        borderRadius={'2xl'} 
        // backgroundColor={'gray.300'}
        whiteSpace={'normal'}
        margin={'3'}
      >
        <Center>
            <Heading pt={'10'} whiteSpace={'normal'}>Education</Heading>
        </Center>
        <Wrap
          w={'full'} 
          p={'4'} 
          // maxW={'full'}
          spacing={'10'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          // align={'center'}
          // direction={['column', 'column', 'row']}

        >
            {
                Object.keys(projects).map(project => (
                    <ProjectBox project={projects[project]} key={project} />
                ))
            }
            
        </Wrap>
      </Box>
      </>
    )
  }

function ProjectBox({project}) {

    return (
      <WrapItem>
<Card w='md' backgroundColor={'gray.200'} boxShadow={'dark-lg'} minW={'40%'}>
        <CardBody>
            <Center>
            <Image
                src={project.logo}
                alt='WashU Education Image'
                w={{ base: '300px', sm: '200px' }}
            />
            </Center>

            <Stack mt='6' spacing='3'>
            <Heading size='md'>{project.title}</Heading>
            <Text whiteSpace={'normal'}>
                {project.text}
            </Text>
            <Text color='gray.800' fontSize='2xl'>
                {project.date}
            </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Button variant='solid' backgroundColor={'gray.800'} color={'gray.300'}>
                Learn More
            </Button>
        </CardFooter>
        </Card>
      </WrapItem>
        
    )
}

export default ProjectsSection;