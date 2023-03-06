import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import {
  SEAT_STATUS_OK,
  SEAT_STATUS_FEW,
  SEAT_STATUS_NO,
} from 'src/libs/stage';

type Props = {
  status: string;
};

const Headline: FC<Props> = ({ status }) => {
  return (
    <Center
      w={'72px'}
      h={'72px'}
      borderRadius={'16px'}
      sx={{
        ...(status === SEAT_STATUS_OK && {
          background: 'pink',
        }),
        ...(status === SEAT_STATUS_FEW && {
          background: 'yellow',
        }),
        ...(status === SEAT_STATUS_NO && {
          background: 'black300',
        }),
      }}
    >
      <Center
        as={'p'}
        fontSize={'1.1rem'}
        fontWeight={'bold'}
        mb={'40px'}
        pos={'relative'}
        sx={{
          ...(status === SEAT_STATUS_OK && {
            color: 'white',
            '&::before': {
              content: '""',
              display: 'block',
              width: '36px',
              height: '36px',
              border: '#ffffff 3px solid',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto -40px auto',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '24px',
              height: '24px',
              border: '#ffffff 3px solid',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto -34px auto',
            },
          }),
          ...(status === SEAT_STATUS_FEW && {
            color: 'white',
            '&::before': {
              content: '""',
              display: 'block',
              width: '36px',
              height: '36px',
              background: 'url("/img/stage_seat_icon_triangle.svg") no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center bottom',
              position: 'absolute',
              inset: 'auto auto -38px auto',
            },
          }),
          ...(status === SEAT_STATUS_NO && {
            color: 'black400',
            '&::before': {
              content: '""',
              display: 'block',
              width: '40px',
              height: '5px',
              background: 'black400',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto -24px auto',
              transform: 'rotateZ(45deg)',
            },
            '&::after': {
              content: '""',
              display: 'block',
              width: '40px',
              height: '5px',
              background: 'black400',
              borderRadius: '9999px',
              position: 'absolute',
              inset: 'auto auto -24px auto',
              transform: 'rotateZ(-45deg)',
            },
          }),
        }}
      >
        {status === SEAT_STATUS_OK && <>残席あり</>}
        {status === SEAT_STATUS_FEW && <>残席わずか</>}
        {status === SEAT_STATUS_NO && <>残席なし</>}
      </Center>
    </Center>
  );
};

export default Headline;
