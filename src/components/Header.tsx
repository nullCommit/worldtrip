import { Flex, Grid, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      h={['50px', '100px']}
      mx='auto'
      px='1rem'
      align='center'
      justify='center'
    >
      <Grid
        w='100%'
        h='100%'
        maxW='1160px'
        alignItems='center'
        justifyContent='center'
        templateColumns='repeat(3, 1fr)'
      >
        <Image
          src='/images/logo.svg'
          alt='world trip logo'
          w={['81px', '184px']}
          justifySelf='center'
          gridColumn='2'
        />
      </Grid>
    </Flex>
  );
}
