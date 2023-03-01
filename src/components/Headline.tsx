import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import OriginalSpacer from 'src/components/OriginalSpacer';

type Props = {
  text: string;
  top?: boolean;
};

const Headline: FC<Props> = ({ text, top }) => {
  return (
    <>
      {!top && <OriginalSpacer size={'28px'} />}
      <Text as={'h2'} fontSize={'2rem'} fontWeight={'bold'}>
        {text}
      </Text>
      <OriginalSpacer size={'16px'} />
    </>
  );
};

export default Headline;
