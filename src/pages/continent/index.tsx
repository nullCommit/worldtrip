import { Flex } from '@chakra-ui/react';
import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { Header } from '../../components/Header';

export default function Continent() {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner />

      <Flex
        direction='column'
        maxW='1160px'
        mx='auto'
        px='1rem'
        my={['8', '20']}
      >
        <ContinentInfo />
      </Flex>
    </Flex>
  );
}
