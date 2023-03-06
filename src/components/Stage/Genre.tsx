import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';

import { stageGenreArray } from 'src/libs/signin';
import { columnType } from 'src/types/column';
import { columnGenreArray } from 'src/libs/column';

type Props = {
  data: stageType | columnType;
  column?: boolean;
};

const StageGenre: FC<Props> = ({ data, column }) => {
  return (
    <Flex gap={'4px'}>
      {data.genre.map((item, i) => (
        <Text
          as={'span'}
          key={item + i}
          fontSize={'1.2rem'}
          fontWeight={'bold'}
          sx={{
            ...(column
              ? {
                  color: 'primary',
                }
              : {
                  color: 'black400',
                }),
          }}
        >
          {column ? (
            <>#{columnGenreArray[i]}</>
          ) : (
            <>#{stageGenreArray[i + 1][item]}</>
          )}
        </Text>
      ))}
    </Flex>
  );
};

export default StageGenre;
