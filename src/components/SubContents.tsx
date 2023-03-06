import { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Headline from 'src/components/Headline';

import { contentsType } from 'src/types/contents';

type Props = {
  data: contentsType[];
};

const SubContents: FC<Props> = ({ data }) => {
  return (
    <Flex flexDir={'column'} gap={'28px'} w={'100%'}>
      {data.map((item: contentsType, i) => (
        <Box w={'100%'} key={item.text + i}>
          <Headline text={item.text} />
          {item.component}
        </Box>
      ))}
    </Flex>
  );
};

export default SubContents;
