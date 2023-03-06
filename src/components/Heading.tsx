import { FC, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { navContentsType } from 'src/types/nav';

import { navContents } from 'src/libs/nav';

type Props = {
  path?: string;
  back?: boolean;
};

const Heading: FC<Props> = ({ path, back }) => {
  const router = useRouter();
  const [nav, setNav] = useState<navContentsType>();
  const [navIndex, setNavIndex] = useState<number>(0);

  useEffect(() => {
    if (path) {
      for (let i = 0; i < navContents.length; i++) {
        if (`/${navContents[i].path}` === path) {
          setNav(navContents[i]);
          setNavIndex(i);
        }
      }
    }
  }, []);

  const backFunc = () => {
    router.back();
  };

  return (
    <>
      {nav && path !== undefined && (
        <Center
          as={'header'}
          w={'100vw'}
          h={'64px'}
          bg={'white'}
          pos={'fixed'}
          inset={'0 0 auto auto'}
          textStyle={'shadow'}
          zIndex={'20'}
        >
          {back && (
            <Box
              w={'24px'}
              h={'24px'}
              pos={'absolute'}
              inset={'auto auto auto 5vw'}
              sx={{
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '14px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  inset: '7px 0 auto -2px',
                  margin: 'auto',
                  borderRadius: '2px',
                  transform: 'rotateZ(-45deg)',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '14px',
                  height: '3px',
                  background: 'black800',
                  position: 'absolute',
                  inset: 'auto 0 6px -2px',
                  margin: 'auto',
                  borderRadius: '2px',
                  transform: 'rotateZ(45deg)',
                },
              }}
              onClick={() => backFunc()}
            />
          )}
          <Text w={'fit-content'} fontSize={'1.7rem'} fontWeight={'bold'}>
            {navIndex === 0 ? 'ステージマルシェ' : nav.name}
          </Text>
        </Center>
      )}
    </>
  );
};

export default Heading;
