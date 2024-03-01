import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransforms: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItem={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} filter={'hue-rotate(-150deg)'} h={['40', '400']} />
          <Text
            lineHeight={'180%'}
            letterSpacing={'widest'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Est irure id dolore incididunt Lorem aute in cupidatat non fugiat
            velit exercitation velit. Duis do esse laborum do velit dolor tempor
            enim non adipisicing irure consequat incididunt. Excepteur occaecat
            nostrud consectetur et quis. Incididunt veniam ex amet exercitation
            laboris velit. Consectetur minim voluptate reprehenderit in tempor
            irure sit dolore nostrud sunt esse nulla esse. Nisi cillum anim id
            enim cupidatat cillum et incididunt quis. Esse velit amet
            exercitation mollit commodo. Lorem laboris consequat in qui officia
            nostrud cupidatat excepteur irure ullamco consectetur deserunt
            aliqua. Esse non fugiat laboris reprehenderit in sit labore
            adipisicing mollit elit Lorem consectetur. Duis qui officia sint
            ullamco ullamco enim id aliquip sint voluptate aliquip exercitation
            ipsum.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading
        bgColor={'blackAlpha.500'}
        color={'white'}
        {...headingOptions}
        m={'0'}
      >
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
