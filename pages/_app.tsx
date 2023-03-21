import type { AppProps } from 'next/app';
import theme from 'src/theme';
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [isStart, setIsStart] = useState<boolean>(true);
  const [isLogoTransition, setIsLogoTransition] = useState<boolean>(false);
  const START_TIMER: number = 2500;
  const LOGO_TIMER: number = 100;

  const startTimer = () => {
    setTimeout(() => {
      setIsStart(!isStart);
    }, START_TIMER);
  };

  const logoTimer = () => {
    setTimeout(() => {
      setIsLogoTransition(!isLogoTransition);
    }, LOGO_TIMER);
  };

  // useEffect(() => {
  //   startTimer();
  //   logoTimer();
  // }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {/* <Center
          w={'100vw'}
          h={'100vh'}
          bg={'skyblue'}
          pb={'40px'}
          transition={'opacity 0.2s'}
          pos={'fixed'}
          inset={'0 0 auto auto'}
          zIndex={'30'}
          sx={{
            ...(isStart
              ? {
                  opacity: 1,
                  pointerEvents: 'auto',
                }
              : {
                  opacity: 0,
                  pointerEvents: 'none',
                }),
          }}
        >
          <Box
            w={'70vw'}
            transition={'opacity 0.1s'}
            sx={{
              ...(isLogoTransition
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  }),
            }}
          >
            <Box as={'img'} src={'/img/icon-white.svg'} w={'100%'} />
          </Box>
        </Center> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
