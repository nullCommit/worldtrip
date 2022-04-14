import {
  Button,
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import { RiInformationLine } from 'react-icons/ri';

export function ContinentInfoItem() {
  return (
    <Flex align='center' justify='space-between'>
      <Flex direction='column' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='yellow.500' fontWeight='600'>
          50
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='600' color='gray.500'>
          países
        </Text>
      </Flex>

      <Flex direction='column' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='yellow.500' fontWeight='600'>
          60
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='600' color='gray.500'>
          línguas
        </Text>
      </Flex>

      <Flex direction='column' align={['flex-start', 'flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='yellow.500' fontWeight='600'>
          27
        </Heading>
        <Text fontSize={['md', 'xl']} fontWeight='600' color='gray.500'>
          cidades +100
          <Popover>
            <PopoverTrigger>
              <a>
                <Icon
                  as={RiInformationLine}
                  w={['10px', '16px']}
                  h={['10px', '16px']}
                  ml='1'
                  color='gray.400'
                  cursor='pointer'
                />
              </a>
            </PopoverTrigger>

            <PopoverContent bg='gray.350' color='gray.500'>
              <PopoverArrow bg='gray.350' />

              <PopoverCloseButton />

              <PopoverBody fontSize='lg' fontWeight='400'>
                Roma, Inglaterra, Paris, Zurique, Zermatt, Amsterdã
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  );
}
