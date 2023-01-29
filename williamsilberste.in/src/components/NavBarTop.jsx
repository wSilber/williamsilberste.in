import React, { useEffect } from 'react';
import {
  Button,
  Box,
  HStack,
  Show,
  Slide,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi';

function NavBarTop(props) {

    const nav_pages = props.nav_pages;

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if(props.toggle)
            onOpen()
        else
            onClose()
    })

    console.log(props)

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
        <Box p={2} backgroundColor={'gray.800'} boxShadow={'0px 2px 10px 1px'}>
            <HStack direction={'column'} justifyContent={'center'}>
            {nav_pages.map(page => (
                <Button
                    key={page}
                    backgroundColor={'gray.800'}
                    borderRadius={'none'}
                    color={'gray.300'}
                    fontSize={'md'}
                    _hover={{
                        color: 'gray.50',
                        borderBottom: '2px',
                        borderBottomColor: 'gray.50'
                        }}>
                    {page}
                </Button>
            ))}
            </HStack>
        </Box>
    )
}

function MobileNav({nav_pages}) {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box p={2} backgroundColor={'gray.800'} boxShadow={'0px 2px 10px 1px'}>
            <IconButton
                variant={'outline'}
                onClick={onOpen}
                aria-label={'open menu'}
                backgroundColor={'gray.200'}
                _hover={{
                    backgroundColor: 'gray.500',
                }}
                icon={<FiMenu />}
            />
                
            Mobile Nav
        </Box>
    )
}

export default NavBarTop;
