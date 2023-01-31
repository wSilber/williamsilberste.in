import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
    Box,
    HStack,
    Link,
    Text
} from '@chakra-ui/react'

function Footer() {

    return (
        <>
        <Box h={'20vh'} backgroundColor={'gray.800'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
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
            </Box>
        </>
    )
  }

export default Footer;