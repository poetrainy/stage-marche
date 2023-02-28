import { FC, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';

import OriginalSpacer from 'src/components/OriginalSpacer';
import GradationBtn from 'src/components/GradationBtn';
import PreText from 'src/components/PreText';

import { signinGuidanceText } from 'src/libs/signin';

import { signinGuidanceTextType } from 'src/types/signin';

import useGetPath from 'src/hooks/useGetPath';

const SigninGuidance: FC = () => {
  const [guidance, setGuidance] = useState<signinGuidanceTextType>();
  const path = useGetPath();

  useEffect(() => {
    for (let i = 0; i < signinGuidanceText.length; i++) {
      if (`/${signinGuidanceText[i].path}` === path) {
        setGuidance(signinGuidanceText[i]);
      }
    }
  }, [path]);

  return (
    <>
      {guidance && (
        <Center h={'auto'} flexDirection={'column'} pb={'32px'}>
          <Box as={'img'} src={`/img/guidance_${guidance.path}.svg`} />
          <OriginalSpacer size={'32px'} />
          <Center flexDirection={'column'} gap={'12px'} w={'fit-content'}>
            <PreText text={guidance.heading} />
            <Text
              w={'90vw'}
              color={'black600'}
              fontSize={'1.2rem'}
              lineHeight={'2.2rem'}
              textAlign={'center'}
            >
              {guidance.text}
            </Text>
          </Center>
          <OriginalSpacer size={'32px'} />
          <GradationBtn text={'無料でログイン'} path={'signin'} />
        </Center>
      )}
    </>
  );
};

export default SigninGuidance;
