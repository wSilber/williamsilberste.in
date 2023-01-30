import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Collapse,
    Container,
    Divider,
    Heading,
    Image,

    Stack,
    Text,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react'

  import { motion } from 'framer-motion'

function MainComponent(props) {

    const toggle = props.toggle
    const about_me_text = props.about_me_text

    console.log(about_me_text)

    const [show, setShow] = useState(props.toggle)
    const [isMobile] = useMediaQuery("(min-width: 768px)")

    const { getDisclosureProps, isOpen } = useDisclosure()


  return (
    <>
        <motion.div
        {...getDisclosureProps()}
        hidden={false}
        initial={toggle}
        onAnimationStart={() => setShow(toggle)}
        onAnimationComplete={() => setShow(!isOpen)}
        delay={'1s'}
        animate={{ width: toggle & isMobile ? '80vw' : '100vw'}}
        style={{
          whiteSpace: 'nowrap',
          position: 'absolute',
          right: '0',
          height: '100vh',
          top: '0',
          zIndex: '-1'
        }}
      >
        <InsideContent about_me_text={about_me_text}/>
      </motion.div>
    </>
    
  );
}

function AboutSection({about_me_text}) {

  console.log()

  return (
    <>
    <Box 
      borderRadius={'2xl'} 
      // border={'1px'}
      borderColor={'gray.700'} 
      backgroundColor={'gray.100'}
      margin={'3'}
    >
      <Stack 
        direction={['column', 'row']} 
        w={'full'} 
        p={'4'} 
        maxW={'full'}
        spacing={'10'}
      >
        <Image
          borderRadius={'full'}
          height={'md'}
          src='/images/headshot.JPG'
          alt='William Silberstein'
        />

        <Box w={'full'} whiteSpace={'normal'}>
          <Heading pb={'10'} whiteSpace={'normal'}>About Me</Heading>
          <Text fontSize={{base: 'md', md: 'xl'}}>
          {about_me_text['about_me_text']}
          </Text>
          <br></br>
          <Text fontSize={{base: 'md', md: 'xl'}}>
          In addition to my interests in technology, I also have an interest in Music, Dogs, and Hockey.
          </Text>
          <br></br>
          <Button 
            backgroundColor={'gray.800'}
            color={'gray.300'}
            _hover={{
              color: 'gray.50',
              backgroundColor: 'gray.500'
            }}
          >
            Contact
          </Button>
        </Box>
        

      </Stack>
    </Box>
    </>
  )
}

function InsideContent(about_me_text) {
    return (
      <>
        <Box 
          w={'full'} 
          h={'100vh'} 
          backgroundImage={'/images/header.jpg'} 
          backgroundPosition={'bottom'} 
          backgroundSize={'cover'}
          backgroundRepeat={'no-repeat'}
          zIndex={'-1'}
        >
        </Box>
        <AboutSection about_me_text={about_me_text}/>
        <Box h={'200vh'}></Box>
      </>
      
    )
}

export default MainComponent;
