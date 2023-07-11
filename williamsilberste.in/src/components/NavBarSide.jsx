import React, { useState } from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
  Button,
  Box,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  HStack,
  useMediaQuery
} from '@chakra-ui/react'

import { motion } from 'framer-motion'

function NavBarTop(props) {

    const [show, setShow] = useState(props.toggle)
    const [isMobile] = useMediaQuery("(min-width: 768px)")

    const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];

    const loaded = props.loaded

    return (
        <>
            <motion.div
                hidden={false}
                initial={!show}
                onAnimationStart={() => setShow(!show)}
                onAnimationComplete={() => setShow(!show)}
                animate={{ width: props.toggle & isMobile ? '20vw' : '0'}}
                transition={'linear'}
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'fixed',
                    height: '100vh',
                    top: '0',
                    zIndex: '1',
                    visibility: loaded? 'visible' : 'hidden'
                }}
            >
                <Box 
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    h={'full'}
                >
                    <Box
                        backgroundColor={'gray.800'}
                        // w={'20%'}
                        h={'full'}
                        justifyContent={'center'}
                    >
                        <Stack 
                            direction={'column'} 
                            alignItems={'center'} 
                            justifyContent={'center'}
                            h={'full'}
                        >
                            <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignContent={'center'}
                            flexDirection={'column'}
                            textAlign={'center'}
                            p={5}
                            >
                                <Image src="/images/logo-no-background.png" maxW={'90%'} alignSelf={'center'}></Image>
                                {/* <Text   
                                    backgroundColor={'gray.800'}
                                    color={'gray.50'}
                                    fontSize={'lg'}
                                    fontWeight={'semibold'}
                                    mt={'5'}
                                >
                                    William Silberstein 
                                </Text>
                                <Text
                                    backgroundColor={'gray.800'}
                                    color={'gray.50'}
                                    as='i'
                                    mb={'50'}
                                    fontSize={'sm'}
                                >
                                    Personal Website
                                </Text> */}
                            </Box>
                        {nav_pages.map(page => (
                            <Button
                                key={page}
                                backgroundColor={'gray.800'}
                                borderRadius={'none'}
                                color={'gray.300'}
                                fontSize={'md'}
                                width={'50%'} 
                                href={`#${page}`}
                                p={0}           
                                _hover={{
                                    color: 'gray.50',
                                    borderBottom: '2px',
                                    borderBottomColor: 'gray.50'
                                }}>
                                <Link 
                                    href={`#${page}`} 
                                    w={'full'} 
                                    textDecoration={'none'}
                                    _hover={{
                                        textDecoration: 'none'
                                    }}
                                >
                                {page}
                                </Link>
                                
                            </Button>
                        ))}
                        <Spacer />
                            <HStack justifyContent={'center'}>
                                <Link 
                                    href='https://www.linkedin.com/in/william-silberstein/'
                                    isExternal
                                >
                                    <FaLinkedin 
                                        size={'40'} 
                                        color={'white'}
                                        cursor={'pointer'}
                                    />
                                </Link>
                                <Link 
                                    href='https://github.com/wSilber'
                                    isExternal
                                >
                                    <FaGithub 
                                        size={'40'} 
                                        color={'white'}
                                        cursor={'pointer'}
                                    />
                                </Link>
                            </HStack>
                            <Text
                                backgroundColor={'gray.800'}
                                color={'gray.50'}
                                as='i'
                                pb={'50'}
                                fontSize={'sm'}
                            >
                                wsilberstein@wustl.edu
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </motion.div>        
        </>
    );
}

export default NavBarTop;
