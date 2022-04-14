import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// importações de estilo do swipe
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        className='mySwiper'
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
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
            <Link href='/continent'>
              <a>
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color='gray.100'
                  fontWeight='bold'
                >
                  Europa
                </Heading>
                <Text
                  fontWeight='bold'
                  color='gray.200'
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>

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
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color='gray.100'
                  fontWeight='bold'
                >
                  Europa
                </Heading>
                <Text
                  fontWeight='bold'
                  color='gray.200'
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  O continente mais antigo.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
