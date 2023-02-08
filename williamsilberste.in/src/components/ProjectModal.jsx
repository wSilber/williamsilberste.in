import React from 'react';
import {
    Button,
    Card,
    CardBody,
    Center,
    Heading,
    Image,
    Modal,
    Link,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Stack,
    Text,
  } from '@chakra-ui/react'

function ProjectModal({project, isOpen, onClose}) {
    

    return (
    <>
        <Modal isOpen={isOpen} onClose={onClose} size={'2xl'} p={0} isCentered>
        <ModalOverlay />
        <ModalContent p={0}>
            {/* <ModalHeader>{project.title}</ModalHeader>
            <ModalCloseButton /> */}
            <ModalBody p={0}>
            
            <Card >
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
                        {project.textLong}
                    </Text>
                    <Text color='gray.800' fontSize='2xl'>
                        {project.date}
                    </Text>
                    </Stack>
                </CardBody>
            </Card>

            </ModalBody>

            <ModalFooter>
            {project.title != 'Audio Digitizing Device' && <Button variant='solid' backgroundColor={'gray.800'} color={'gray.300'} mr={3}>
                <Link href={project.link} isExternal>
                    Learn More
                </Link>
            </Button>}
            <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
            </Button>
            </ModalFooter>
        </ModalContent>
        </Modal>
    </>
    )
}

export default ProjectModal;