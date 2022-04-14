import { Flex, Heading } from '@chakra-ui/react';

export function ContinentBanner() {
  return (
    <Flex
      w='100%'
      h={['150px', '300px', '500px']}
      px={['0', '0', '36']}
      pt={['0', '0', '72']}
      bgImage='url(/images/europebanner.png)'
      bgSize='cover'
      bgPosition='center'
      bgRepeat='no-repeat'
      align='center'
      justify={['center', 'center', 'flex-start']}
    >
      <Heading
        // textAlign={['center', 'left']}
        color='gray.100'
        fontSize={['1.75rem', '5xl']}
        fontWeight='600'
      >
        Europa
      </Heading>
    </Flex>
  );
}
