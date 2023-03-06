import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

import OriginalSpacer from 'src/components/OriginalSpacer';
import StageGenre from 'src/components/Stage/Genre';

import { columnType } from 'src/types/column';
import ColumnDate from 'src/components/Column/Date';

type Props = {
  data: columnType[];
};

const ColumnBunner: FC<Props> = ({ data }) => {
  return (
    <Flex
      flexDir={'column'}
      gap={'12px'}
      textStyle={'bodyW'}
      sx={{
        '>a': {
          display: 'flex',
          alignItems: 'center',
          gap: '5%',
          width: '100%',
          background: 'white',
          padding: '16px',
          borderRadius: '16px',
          textStyle: 'shadow',
        },
      }}
    >
      {data.map((item, i) => (
        <NextLink href={`/column/${item.id}`} passHref key={item.title + i}>
          <Box w={'60%'}>
            <ColumnDate data={item} />
            <OriginalSpacer size={'2px'} />
            <Text fontSize={'1.5rem'} fontWeight={'bold'}>
              {item.title}
            </Text>
            <OriginalSpacer size={'4px'} />
            <Text
              display={'-webkit-box'}
              color={'black500'}
              fontSize={'1rem'}
              textOverflow={'ellipsis'}
              overflow={'hidden'}
              sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: '3',
              }}
            >
              {item.text}
            </Text>
            <OriginalSpacer size={'4px'} />
            <StageGenre data={item} column />
          </Box>
          <Box
            w={'35%'}
            pt={'50%'}
            pos={'relative'}
            borderRadius={'8px'}
            overflow={'hidden'}
          >
            <Box
              as={'img'}
              src={`/img/column_0${item.id}.jpg`}
              w={'100%'}
              h={'100%'}
              pos={'absolute'}
              inset={'0 0 0 0'}
              objectFit={'cover'}
            />
          </Box>
        </NextLink>
      ))}
    </Flex>
  );
};

export default ColumnBunner;
