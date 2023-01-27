import React, { useEffect } from 'react';

import {
  Button,
  Box,
  Slide,
  Stack,
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
            <Slide direction='left' in={isOpen}>
                <Box
                    backgroundColor={'gray.800'}
                    w={{ base: 'full', md: 60 }}
                    h={'full'}
                    justifyContent={'center'}
                >
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
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
                    </Stack>
                </Box>
            </Slide>
        </>
    );
}

export default NavBarTop;
