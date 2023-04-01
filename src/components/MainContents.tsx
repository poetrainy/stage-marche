import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import Heading from 'src/components/Heading';
import Navigation from 'src/components/Navigation';

import useGetPath from 'src/hooks/useGetPath';
import SigninGuidance from 'src/components/SigninGuidance';
import useAuth from 'src/hooks/useAuth';

type Props = {
  component: JSX.Element;
  login?: boolean;
  search?: boolean;
  index?: boolean;
  specialBackground?: boolean;
};

const MainContents: FC<Props> = ({
  component,
  search,
  index,
  specialBackground,
}) => {
  const path = useGetPath();
  const isAuth = useAuth();

  return (
    <>
      {path && (
        <Box
          flexDir={'column'}
          sx={{
            ...(specialBackground && {
              background: 'greenToBlue',
            }),
          }}
        >
          <Heading path={path} search={search} />
          <Box
            as={'main'}
            minH={'100vh'}
            p={'calc(64px + 32px) 0 calc(40px + 96px)'}
            sx={{
              ...(!index && {
                textStyle: 'bodyW',
              }),
            }}
          >
            <>{component}</>
            {/* <SigninGuidance /> */}
            {/* {index || isAuth ? <>{component}</> : <SigninGuidance />} */}
          </Box>
          <Navigation path={path} />
        </Box>
      )}
    </>
  );
};

export default MainContents;
