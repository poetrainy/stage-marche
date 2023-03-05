import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { stageType } from 'src/types/stage';

type Props = {
  data: stageType;
};

const StageName: FC<Props> = ({ data }) => {
  return (
    <Text as={'h3'} fontSize={'1.7rem'} fontWeight={'bold'}>
      {/* {data.name} */}
      ????
    </Text>
  );
};

export default StageName;
