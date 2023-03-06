import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';

import { genreArray } from 'src/libs/signin';

type Props = {
  data: stageType;
};

const StageType: FC<Props> = ({ data }) => {
  return (
    <Flex gap={'4px'}>
      {data.genre.map((genre, i2) => (
        <Text
          as={'span'}
          key={genre + i2}
          color={'black400'}
          fontSize={'1.2rem'}
          fontWeight={'bold'}
        >
          #{genreArray[i2 + 1][genre]}
        </Text>
      ))}
    </Flex>
  );
};

export default StageType;
