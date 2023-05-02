import { Box, Container, Heading, Image, Stack,Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';
const headingoption = {
  pos: 'absolute',
  left: '30%',
  top: '40%',
  transform: 'transform(-50%,-50%)',
  teaxtTransform: 'uppercase',
  p: '4',
  size: '4xl',
};
const Home = () => (
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
      <Stack h={'full'} alignItems={'center'} direction={['column', 'row']}>
        <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40', '400']} />
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
          commodi veritatis, ipsa aut odio ea cum modi rem iste eveniet corrupti
          aperiam magnam voluptate ad eius sed sit! Dignissimos labore nesciunt
          ullam voluptatum laborum nihil est minima impedit ducimus quidem nemo
          inventore nulla magnam quae vel doloribus, ratione enim. Numquam
          architecto sit quis, dignissimos sint adipisci ipsum itaque harum
          tempore rem aut ducimus quaerat magnam illum? Veniam necessitatibus
          quas voluptate adipisci cupiditate perspiciatis aspernatur tempora
          rerum placeat illo eaque nulla quae pariatur nemo corrupti nesciunt
          cumque tempore, commodi quaerat amet deserunt asperiores neque?
          Necessitatibus odit, eum temporibus animi quaerat blanditiis modi
          velit, suscipit quidem nobis minus consequuntur dolore assumenda
        
        </Text>
      </Stack>
    </Container>
  </Box>
);

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'110vh'}>
      <Image src={img1} height={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingoption} textAlign={'center'}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2}  height={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingoption}>
        Future is gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3}  height={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
        Gaming world ..
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4}  height={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingoption}>
        Night Life is Cool
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
