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
    useDisclosure
  } from '@chakra-ui/react'

import ProjectModal from './ProjectModal';

const projects = {
    todoapp: {
        logo: '/images/todo-app.PNG',
        title: 'Todo Application',
        text : 'A decentralized todo application that interacts with the Ethereum blockchain.',
        textLong : <p>The Todo dapp allows users to easily manage all of their personal
                    todos and tasks. By utilizing blockchain technology, users are
                    forced to complete their task or risk losing a deposite. Think of
                    it as a task manager for major procrascinators :).<br></br><br></br>
        
                    All tasks are publicly stored on the ethereum blockchain (ropsten testnet). 
                    Users have the option to lock in ethereum with each task. This ethereum is 
                    then returned to the user with extra tokens when the task is completed. Users 
                    who do not complete their tasks in time lose their deposit and do not receive 
                    tokens. This helps to motivate users who struggle with procrastinating with 
                    getting their tasks done.</p>,
        link: 'https://github.com/wSilber/Todo-App'
    },
    snitherio: {
        logo: '/images/snitherio.png',
        title: 'Snither.io',
        text : 'A recreation of the popular multiplayer game Slither.io',
        textLong: <p>Snither.io is a remake of the popular online multiplayer game Sliter.io. Users
                  can compete for the highest score by consuming food and other players. The game 
                  features an account system so that players can save their progress and view the
                  top scores of others. <br></br><br></br>

                  This project was created as my final project for WashU's CSE 330, a class that
                  focusses on backend server development. By combining a lightweight express server with
                  socket listeners, the game can easily communicate the game state to the player/server.
                  One of the biggest challenges when creating this game was to stop playing it.</p>,
        link: 'https://github.com/wSilber/snither.io'
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
        id={'Projects'}
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

  const { isOpen, onOpen, onClose } = useDisclosure()

    return (
      <WrapItem 
        id='Projects' 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'} 
        maxW={{lg: '25%', md: '35%', sm: '40%', base : '100%'}}
        minW={'300px'}
        transform={'scale(1)'}
        transition={'.5s'}
        _hover={{
          transform: 'scale(1.1)',
          cursor: 'pointer'
        }}
        onClick={onOpen}
      >
        <ProjectModal project={project} isOpen={isOpen} onClose={onClose} />
        <Card maxW={'md'} backgroundColor={'gray.200'} boxShadow={['md', '2xl']} height={{md: '450px', sm: '450px', base: '450px'}}>
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