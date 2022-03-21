// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

// 2. Call `extendTheme` and pass your custom values
export const customTheme = extendTheme({
  sizes: {
    half: '50%',
  },
});
