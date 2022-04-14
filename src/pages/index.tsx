import { Box, Flex, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { ImageSlider } from '../components/ImageSlider';
import { AttractionsInfo } from '../components/AttractionsInfo';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <AttractionsInfo />

      <Flex
        direction='column'
        mt={['9', '9', '20']}
        mb={['6', '6', '13']}
        align='center'
        justify='center'
      >
        <Box w='90px' borderTop='2px solid #47585B'></Box>

        <Text
          color='gray.500'
          fontSize={['xl', 'xl', '4xl']}
          fontWeight='500'
          textAlign='center'
          my={['6', '6', '3.25rem']}
          px='1rem'
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <ImageSlider />
    </Flex>
  );
}
