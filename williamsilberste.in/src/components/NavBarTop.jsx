import React, { useEffect, useState } from 'react';
import {
  Button,
  Box,
  Center,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  HStack,
  Link,
  Show,
  Slide,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function NavBarTop(props) {

    const nav_pages = props.nav_pages;

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if(props.toggle)
            onOpen()
        else
            onClose()
    })

    return (
        <>
            <Slide direction='top' in={isOpen}>
                <Show above='md' >
                    <DesktopNav nav_pages={nav_pages}/>
                </Show>
                <Show below='md'>
                    <MobileNav nav_pages={nav_pages} />
                </Show>

            </Slide>
        </>
    );
}

function DesktopNav({nav_pages}) {
    return (
        <Box p={2}  boxShadow={'0px 2px 10px 1px'} bgGradient='linear(to-r, gray.800, gray.700)' style={{'zIndex': -2}}>
            <HStack direction={'column'} justifyContent={'center'}>
            {nav_pages.map(page => (
                <Button
                    key={page}
                    backgroundColor={'inherit'}
                    borderRadius={'none'}
                    color={'gray.300'}
                    fontSize={'md'}
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
            </HStack>
        </Box>
    )
}

function MobileNav({nav_pages}) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement]   = useState('top')

    return (
        <Box p={2} backgroundColor={'gray.800'} boxShadow={'0px 2px 10px 1px'}>
            <IconButton
                variant={'outline'}
                onClick={onOpen}
                aria-label={'open menu'}
                backgroundColor={'gray.200'}
                _hover={{
                    backgroundColor: 'gray.800',
                    color: 'gray.100'
                }}
                icon={<FiMenu />}
            />
            
            <Drawer onClose={onClose} isOpen={isOpen} placement={placement}>
                <DrawerOverlay />
                <DrawerContent w={'full'} h={'100vh'}>
                <DrawerHeader 
                    backgroundColor={'gray.800'}
                >
                    <Box 
                        display={'flex'}
                        justifyContent={'center'}
                        alignContent={'center'}
                        flexDirection={'row'}
                        textAlign={'center'}
                    >
                        <Grid templateColumns={'repeat(3, 1fr)'} w={'full'} >
                            <GridItem w='20%'>
                                <Center>
                                <CloseButton backgroundColor={'gray.50'} onClick={onClose} float={'left'} size={'lg'}/>
                                </Center>
                                
                            </GridItem>
                            <GridItem w='100%'>
                                <Box
                                w={'full'}
                                display={'flex'}
                                justifyContent={'center'}
                                alignContent={'center'}
                                flexDirection={'column'}
                                textAlign={'center'}

                                >   
                                <Text   
                                    backgroundColor={'gray.800'}
                                    color={'gray.50'}
                                    fontSize={'2xl'}
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
                                    fontSize={'md'}
                                >
                                    Personal Website
                                </Text>
                            </Box> 
                            </GridItem>
                            <GridItem w='20%'/>
                        </Grid>
                    </Box>
                    
                </DrawerHeader>
                <DrawerBody backgroundColor={'gray.800'}>
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
                        p={0}
                    >
                        
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
                            onClick={onClose}
                            p={0}
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
                                    size={'70'} 
                                    color={'white'}
                                    cursor={'pointer'}
                                />
                            </Link>
                            <Link 
                                href='https://github.com/wSilber'
                                isExternal
                            >
                                <FaGithub 
                                    size={'70'} 
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
                            fontSize={'lg'}
                        >
                            wsilberstein@wustl.edu
                        </Text>
                    </Stack>

                    
                </Box>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
                
            Mobile Nav
        </Box>
    )
}

export default NavBarTop;
