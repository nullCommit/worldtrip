import { Flex, Grid, GridItem, HStack } from '@chakra-ui/react';
import { InfoItem } from './InfoItem';

export function Info() {
  return (
    <Grid
      w='100%'
      justifyContent='space-between'
      alignItems='center'
      mt={['10', '32']}
      mx='auto'
      maxW='1160px'
      gap={[1, 5]}
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
    >
      <GridItem>
        <InfoItem icon='cocktail' title='vida noturna' />
      </GridItem>

      <GridItem>
        <InfoItem icon='surf' title='praia' />
      </GridItem>

      <GridItem>
        <InfoItem icon='building' title='moderno' />
      </GridItem>

      <GridItem>
        <InfoItem icon='museum' title='clássico' />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <InfoItem icon='earth' title='e mais...' />
      </GridItem>
    </Grid>
  );
}
