import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA',
      '300': 'rgba(153,153,153,0.5)',
      '400': '#999999',
      '500': '#47585B',
    },
    yellow: {
      '400': 'rgba(255,186,8,0.5)',
      '500': '#FFBA08',
    },
  },
  fonts: {
    headings: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.500',
      },
    },
  },
});
