import { FC } from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const PreText: FC<Props> = ({ text }) => (
  <Text as={'h2'} w={'fit-content'}>
    <Text
      as={'pre'}
      fontSize={'2rem'}
      fontWeight={'bold'}
      lineHeight={'3.2rem'}
      textAlign={'center'}
    >
      {text}
    </Text>
  </Text>
);

export default PreText;
