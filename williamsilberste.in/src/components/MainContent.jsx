import React, { useState } from 'react';
import {
    Box,
    Collapse,
    Container,
    Image,
    Stack,
    Text,
    useDisclosure,
    useMediaQuery
  } from '@chakra-ui/react'

  import { motion } from 'framer-motion'

function MainComponent(props) {

    const toggle = props.toggle

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
        <InsideContent />
      </motion.div>
    </>
    
  );
}

function AboutSection() {
  return (
    <>
    <Stack direction={['column', 'row']}>
      <Image
        // borderRadius={'full'}
        height={'md'}
        // boxSize={'150px'}
        src='/images/headshot.JPG'
        alt='William Silberstein'
      />
      <Box overflowWrap={'normal'}>
        <Text>
        laksjdflaj sdl;f jas;ldfj l;kas djflk;asj dfl;kaj sd;lkf jas;lkgaksdjlfh vljkasjllkv asld kajchv ashdas dfl as;dkf ;askd flas dklas vlkslfkj sadlkfjal;svj lkasjdf lsdaj fl
        </Text>
      </Box>

    </Stack>
    </>
  )
}

function InsideContent() {
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
        <AboutSection />
        <Box h={'100vh'} zIndex={'-1'} backgroundColor={'green.400'}>
          <Text>
            TESTING
          </Text>
          Test3
        </Box>
      </>
      
    )
}

export default MainComponent;
