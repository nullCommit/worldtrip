import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Info } from '../components/Info';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <Info />
    </Flex>
  );
}
