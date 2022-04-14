import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CityProps {
  image: string;
  city: string;
  country: string;
}

export function City({ image, city, country }: CityProps) {
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image
        src={`/cities/${image}.jpg`}
        w='100%'
        h='170px'
        objectFit='cover'
      />

      <Flex
        p='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.400'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='600'>
            {city}
          </Heading>
          <Text fontSize='md' fontWeight='500' color='gray.400' mt='3'>
            {country}
          </Text>
        </Flex>

        <Image
          src='/flags/uk-flag.svg'
          w='30px'
          h='30px'
          borderRadius='15px'
          objectFit='cover'
        />
      </Flex>
    </Box>
  );
}
