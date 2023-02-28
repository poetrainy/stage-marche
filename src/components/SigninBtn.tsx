import { FC } from 'react';
import { Box } from '@chakra-ui/react';

import NextLink from 'next/link';

const SigninBtn: FC = () => (
  <Box
    sx={{
      '>a': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '240px',
        height: '64px',
        color: 'white',
        background: 'gradation1',
        fontWeight: 'bold',
        borderRadius: '9999px',
      },
    }}
  >
    <NextLink href={'/signin'} passHref>
      無料でログイン
    </NextLink>
  </Box>
);

export default SigninBtn;
