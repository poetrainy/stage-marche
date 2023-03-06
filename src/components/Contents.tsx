import { FC } from 'react';
import { Box } from '@chakra-ui/react';

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
        <Box flexDir={'column'}>
          <Heading path={path} />
          <Box as={'main'} minH={'100vh'} p={'64px 0 96px'} textStyle={'bodyW'}>
            {component}
          </Box>
          <Navigation path={path} />
        </Box>
      )}
    </>
  );
};

export default Contents;
