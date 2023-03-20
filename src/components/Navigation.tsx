import { FC } from 'react';
import NextLink from 'next/link';
import { Box, Center, Flex, Text } from '@chakra-ui/react';

import { navContents } from 'src/libs/nav';

type Props = {
  path: string;
};

const Navigation: FC<Props> = ({ path }) => {
  return (
    <Flex
      as={'nav'}
      alignItems={'flex-start'}
      w={'100vw'}
      h={'96px'}
      bg={'white'}
      p={'0 calc(5vw / 2)'}
      pos={'fixed'}
      inset={'auto auto 0 0'}
      textStyle={'deepShadow'}
      borderRadius={'30px 30px 0px 0px'}
      zIndex={'20'}
    >
      {navContents.map((item, i) => (
        <Center
          key={item.path + i}
          flexDir={'column'}
          w={'19vw'}
          sx={{
            '>a': {
              display: 'flex',
              flexDir: 'column',
              alignItems: 'center',
              gap: '4px',
              position: 'relative',
              // ...(item.center
              //   ? {
              //       justifyContent: 'center',
              //       width: '80px',
              //       height: '80px',
              //       background: 'black800',
              //       borderRadius: '9999px',
              //       overflow: 'hidden',
              //       transform: 'translateY(-16px)',
              //     }
              //   : {
              width: '100%',
              height: '100%',
              padding: '16px 0',
              // }),
              // ...(`/${item.path}` === path &&
              //   item.center && {
              //     background: 'greenToBlue',
              //   }),
              '&::before': {
                content: '""',
                width: '24px',
                height: '4px',
                background: 'primary',
                borderRadius: '0px 0px 4px 4px',
                position: 'absolute',
                inset: '0 auto auto auto',
                // ...(`/${item.path}` === path && !item.center
                ...(`/${item.path}` === path
                  ? {
                      display: 'block',
                    }
                  : {
                      display: 'none',
                    }),
              },
            },
          }}
        >
          <NextLink href={`/${item.path}`} passHref>
            <Box
              as={item.img}
              sx={{
                path: {
                  fill:
                    // `/${item.path}` === path && !item.center
                    `/${item.path}` === path ? 'primary' : item.fill,
                },
              }}
            />
            <Text
              as={'span'}
              color={
                // `/${item.path}` === path && !item.center ? 'primary' : item.fill
                `/${item.path}` === path ? 'primary' : item.fill
              }
              fontSize={'1rem'}
              fontWeight={'bold'}
            >
              {item.name}
            </Text>
          </NextLink>
        </Center>
      ))}
    </Flex>
  );
};

export default Navigation;
