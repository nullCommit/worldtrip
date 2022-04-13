import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w='100%'
      h={['136px', '250px', '250px', '335px']}
      bgImage='url(/images/banner.jpg)'
      bgRepeat='no-repeat'
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgSize='cover'
    >
      <Flex
        w='100%'
        mx='auto'
        px={['4', '10', '15', '20', '36']}
        align='center'
        justify={['center', 'space-between']}
      >
        <Box>
          <Heading
            color='gray.100'
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
            fontWeight='600'
          >
            5 continentes,
            <br />
            infinitas possibilidades.
          </Heading>

          <Text
            color='gray.200'
            fontSize={['0.8rem', 'xl']}
            fontWeight='400'
            maxW={['100%', '100%', '100%', '550px']}
            mt='5'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          src='/images/airplane.svg'
          alt='Avião voando sobre as nuvens'
          w={['300px', '300px', '300px', '430px']}
          ml='8'
          display={['none', 'none', 'block']}
          transform='translateY(48px)'
        />
      </Flex>
    </Flex>
  );
}
