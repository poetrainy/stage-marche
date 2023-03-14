import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Back: FC = () => {
  const router = useRouter();

  const backFunc = () => {
    router.back();
  };

  return (
    <Center
      w={'32px'}
      h={'32px'}
      bg={'rgba(255, 255, 255, 0.7)'}
      pos={'absolute'}
      inset={'5vw auto auto 5vw'}
      borderRadius={'9999px'}
      zIndex={3}
      textStyle={'lightShadow'}
      sx={{
        '&::before': {
          content: '""',
          display: 'block',
          width: '12px',
          height: '3px',
          background: 'black800',
          position: 'absolute',
          inset: '11px 0 auto -3px',
          margin: 'auto',
          borderRadius: '2px',
          transform: 'rotateZ(-45deg)',
        },
        '&::after': {
          content: '""',
          display: 'block',
          width: '12px',
          height: '3px',
          background: 'black800',
          position: 'absolute',
          inset: 'auto 0 11px -3px',
          margin: 'auto',
          borderRadius: '2px',
          transform: 'rotateZ(45deg)',
        },
      }}
      onClick={() => backFunc()}
    />
  );
};

export default Back;
