import { FC, useEffect, useState } from 'react';
import { Box, Center } from '@chakra-ui/react';

import Heading from 'src/components/Heading';
import Navigation from 'src/components/Navigation';

import useGetPath from 'src/hooks/useGetPath';

type Props = {
  component?: JSX.Element;
};

const Contents: FC<Props> = ({ component }) => {
  const path = useGetPath();

  return (
    <>
      {path && (
        <Box flexDirection={'column'}>
          <Heading path={path} />
          <Box
            as={'main'}
            w={'90vw'}
            minH={'100vh'}
            m={'0 auto'}
            p={'64px 0 96px'}
          >
            {component}
          </Box>
          <Navigation path={path} />
        </Box>
      )}
    </>
  );
};

export default Contents;
