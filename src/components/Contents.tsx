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
        <Center flexDirection={"column"} minH={'100vh'} p={'64px 0 96px'}>
          <Heading path={path} />
          <>{component}</>
          <Navigation path={path} />
        </Center>
      )}
    </>
  );
};

export default Contents;
