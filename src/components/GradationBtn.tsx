import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import NextLink from 'next/link';

type Props = {
  text: string;
  path: string;
};

const GradationBtn: FC<Props> = ({ text, path }) => (
  <Box
    w={'fit-content'}
    m={'0 auto'}
    sx={{
      '>a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '64px',
        color: 'white',
        background: 'greenToBlue',
        fontWeight: 'bold',
        borderRadius: '9999px',
      },
    }}
  >
    <NextLink href={`/${path}`} passHref>
      {text}
    </NextLink>
  </Box>
);

export default GradationBtn;
