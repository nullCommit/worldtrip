import { Box, Grid, Heading } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <Box mt={['2rem', '3rem', '5rem']}>
      <Heading fontSize={['2xl', '4xl']} fontWeight='500' mb='10'>
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        px={['30px', '0']}
        alignItems='center'
        justifyContent='center'
      >
        <City image='londres' city='Londres' country='Reino Unido' />
        <City image='paris' city='Paris' country='França' />
        <City image='rome' city='Roma' country='Itália' />
        <City image='prague' city='Praga' country='República Tcheca' />
        <City image='amsterdam' city='Amsterdã' country='Holanda' />
      </Grid>
    </Box>
  );
}
