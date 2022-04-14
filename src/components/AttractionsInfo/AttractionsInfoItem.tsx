import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface AttractionsItemProps {
  icon: string;
  title: string;
}

export function AttractionsInfoItem({ icon, title }: AttractionsItemProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align='center' justify='center'>
      {isMobile ? (
        <Image src={`/images/${icon}.svg`} mb='6' w='85px' h='85px' />
      ) : (
        <Text color='yellow.500' fontSize='4xl' mr='2'>
          •
        </Text>
      )}
      <Text fontWeight='600' color='gray.500' fontSize={['md', 'xl', '2xl']}>
        {title}
      </Text>
    </Flex>
  );
}
