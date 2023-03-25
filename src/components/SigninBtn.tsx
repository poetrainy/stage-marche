import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { firebase, auth } from 'src/libs/firebase';

const SigninBtn: FC = () => {
  const router = useRouter();

  const text = 'Googleでログイン';

  const signUp = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      router.push('/enquete');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Center
      w={'240px'}
      h={'64px'}
      color={'white'}
      bg={'greenToBlue'}
      fontSize={'1.6rem'}
      fontWeight={'bold'}
      borderRadius={'9999px'}
      m={'0 auto'}
      onClick={() => signUp()}
    >
      {text}
    </Center>
  );
};

export default SigninBtn;
