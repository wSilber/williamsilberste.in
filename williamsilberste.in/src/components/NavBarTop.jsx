import React, { useEffect } from 'react';
import {
  Button,
  Box,
  HStack,
  Slide,
  useDisclosure,
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
            <Slide direction='top' in={isOpen}>
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
            </Slide>
        </>
    );
}

export default NavBarTop;
