import { Flex } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <h1>Home</h1>
    </Flex>
  );
}
