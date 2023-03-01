import { Box, Center } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Contents from 'src/components/Contents';

const Home: NextPage = () => {
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

  useEffect(() => {
    startTimer();
    logoTimer();
  }, []);

  return (
    <>
      <Center
        w={'100vw'}
        h={'100vh'}
        bg={'skyblue'}
        pb={'40px'}
        transition={'opacity 0.2s'}
        pos={'relative'}
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
          <Box as={'img'} src={'./img/icon-white.svg'} w={'100%'} />
        </Box>
      </Center>
      <Contents />
    </>
  );
};

export default Home;
