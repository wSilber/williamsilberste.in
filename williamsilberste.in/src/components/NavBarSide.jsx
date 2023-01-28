import React, { useEffect } from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {
  Button,
  Box,
  Link,
  Slide,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  HStack,
} from '@chakra-ui/react'

function NavBarTop(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const nav_pages = ['Home', 'About', 'Experience', 'Education', 'Projects', 'Contact'];

    useEffect(() => {
        if(props.toggle)
            onOpen()
        else
            onClose()
    })

    console.log(props)

    return (
        <>
        <Slide direction='left' in={isOpen}>
            <Box 
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                h={'full'}
            >
                <Box
                    backgroundColor={'gray.800'}
                    w={{ base: 'full', md: 60 }}
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

                        >
                            <Text   
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
                            </Text>
                        </Box>
                    {nav_pages.map(page => (
                        <Button
                            key={page}
                            backgroundColor={'gray.800'}
                            borderRadius={'none'}
                            color={'gray.300'}
                            fontSize={'md'}
                            width={'50%'} 
                            _hover={{
                                color: 'gray.50',
                                borderBottom: '2px',
                                borderBottomColor: 'gray.50'
                            }}>
                            {page}
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
            
        </Slide>
        </>
    );
}

export default NavBarTop;
