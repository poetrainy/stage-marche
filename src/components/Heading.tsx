import { FC, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { navContentsType } from 'src/types/nav';
import { navContents } from 'src/libs/nav';

type Props = {
  path?: string;
};

const Heading: FC<Props> = ({ path }) => {
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
          boxShadow={'0px 0px 15px rgba(0, 0, 0, 0.05)'}
          zIndex={'20'}
        >
          <Text w={'fit-content'} fontSize={'1.7rem'} fontWeight={'bold'}>
            {navIndex === 0 ? 'チケットマルシェ' : nav.name}
          </Text>
        </Center>
      )}
    </>
  );
};

export default Heading;
