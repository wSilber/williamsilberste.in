import React from 'react';
import {
    AspectRatio,
    Box,
    Button,
    Heading,
    Highlight,
    Image,
    Link,
    Stack,
    Text,
  } from '@chakra-ui/react'

const about_me_text = `

  My name is William Silberstein and I am currently completing two degrees in Computer Engineering and Computer Science at Washington University in St. Louis.
  I have a passion for building software, particularly in building backend systems and networking solutions.

`

function AboutSection() {

    return (
      <>
      <Box 
        borderRadius={'2xl'} 
        borderColor={'gray.700'} 
        backgroundColor={'gray.0'}
        margin={'3'}
        id={'About'}
      >
        <Stack 
          direction={['column', 'column', 'column', 'row', 'row' ]} 
          w={'full'} 
          p={'4'} 
          maxW={'full'}
          spacing={'10'}
        >
          <AspectRatio 
          minW={'sm'}>
          <Image
            borderRadius={'full'}
            objectFit='cover'       
            src='/images/headshot.JPG'
            alt='William Silberstein'
          />
          </AspectRatio>

  
          <Box w={'full'} whiteSpace={'normal'}>
            <Heading pb={'10'} whiteSpace={'normal'}>About Me</Heading>
            <Text fontSize={{base: 'md', md: 'xl'}}>
            <Highlight
                query={['Computer Engineering', 'Computer Science']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
            >
                {about_me_text}
            </Highlight>
            
            </Text>
            <br></br>
            <Text fontSize={{base: 'md', md: 'xl'}}>
                <Highlight
                    query={['Music', 'Dogs', 'Hockey']}
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
                >
                    In addition to my interests in technology, I also have an interest in Music, Dogs, and Hockey.
                </Highlight>
            </Text>
            <br></br>
            <Link href={'#Contact'}>
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
            </Link>

          </Box>
          
  
        </Stack>
      </Box>
      </>
    )
  }

export default AboutSection;