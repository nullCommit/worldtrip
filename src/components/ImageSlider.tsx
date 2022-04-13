import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export function ImageSlider() {
  return (
    <Flex
      w='100%'
      h={['250px', '450px']}
      maxW='1240px'
      mx='auto'
      mb={['5', '10']}
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        style={{ width: '100%', flex: 1 }}
      >
        <SwiperSlide>
          <Flex
            w='100%'
            h={['250px', '450px']}
            align='center'
            justify='center'
            direction='column'
            bgImage='url(/images/europe.png)'
            bgRepeat='no-repeat'
            bgSize='cover'
            bgPosition='center'
            textAlign='center'
          >
            <Link href='/continent/europe'>
              <a>
                <Heading>Europa</Heading>
                <Text>O continente mais antigo.</Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
