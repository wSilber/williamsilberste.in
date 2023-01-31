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
    todoapp: {
        logo: '/images/todo-app.PNG',
        title: 'Todo Application',
        text : 'A decentralized todo application that interacts with the Ethereum blockchain.',
    },
    snitherio: {
        logo: '/images/snitherio.png',
        title: 'Snither.io',
        text : 'A recreation of the popular multiplayer game Slither.io',
    },
    add: {
        logo:'/images/add.png',
        title: 'Audio Digitizing Device',
        text : 'An audio digitizer capable of converting analog/digital audio signals to and from external devices.'
    },
    chatroom: {
      logo: '/images/chatroom.png',
      title: 'Chatroom',
      text : 'An iteractive and realtime chat service.',
    },

}

function ProjectsSection() {

    return (
      <>

      <Box 
        borderRadius={'2xl'} 
        whiteSpace={'normal'}
        margin={'3'}
      >
        <Center>
            <Heading pt={'10'} whiteSpace={'normal'}>Projects</Heading>
        </Center>
        <Wrap
          w={'full'} 
          p={'4'} 
          spacing={'10'}
          justify={'center'}

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
      <WrapItem id='Projects' display={'flex'} justifyContent={'center'} alignItems={'center'} maxW={{lg: '25%', md: '35%', sm: '40%', base : '100%'}}>
        <Card w='md' backgroundColor={'gray.200'} boxShadow={['md', '2xl']} height={{md: '450px', sm: '450px', base: '450px'}}>
        <CardBody p={0}>
            <Center>
              <Image
                  src={project.logo}
                  alt={project.title}
                  w={'full'}
              />
            </Center>
            <Stack mt='6' spacing='3' p={5}>
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