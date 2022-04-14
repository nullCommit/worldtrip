import { Flex, Grid, GridItem, HStack } from '@chakra-ui/react';
import { AttractionsInfoItem } from './AttractionsInfoItem';

export function AttractionsInfo() {
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
        <AttractionsInfoItem icon='cocktail' title='vida noturna' />
      </GridItem>

      <GridItem>
        <AttractionsInfoItem icon='surf' title='praia' />
      </GridItem>

      <GridItem>
        <AttractionsInfoItem icon='building' title='moderno' />
      </GridItem>

      <GridItem>
        <AttractionsInfoItem icon='museum' title='clássico' />
      </GridItem>

      <GridItem colSpan={[2, 2, 2, 1]}>
        <AttractionsInfoItem icon='earth' title='e mais...' />
      </GridItem>
    </Grid>
  );
}
