import { Flex, Grid, Icon, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header() {
  const { asPath } = useRouter();
  const isHome = asPath === '/';

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
        {!isHome && (
          <Link href='/'>
            <a>
              {
                <Icon
                  as={RiArrowLeftSLine}
                  fontSize={[20, 40]}
                  justifySelf='start'
                />
              }
            </a>
          </Link>
        )}

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
