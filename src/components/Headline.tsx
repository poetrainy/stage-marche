import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import OriginalSpacer from 'src/components/OriginalSpacer';

type Props = {
  text: string;
};

const Headline: FC<Props> = ({ text }) => {
  return (
    <>
      <Text as={'h2'} fontSize={'2rem'} fontWeight={'bold'}>
        {text}
      </Text>
      <OriginalSpacer size={'16px'} />
    </>
  );
};

export default Headline;
