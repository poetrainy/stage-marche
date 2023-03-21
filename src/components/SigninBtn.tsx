import { FC } from 'react';
import { Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { firebase, auth } from 'src/libs/firebase';

// import NextLink from 'next/link';

// type Props = {
//   text: string;
//   path: string;
// };

// const GradationBtn: FC<Props> = ({ text, path }) => {
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
      fontWeight={'bold'}
      borderRadius={'9999px'}
      m={'0 auto'}
      onClick={() => signUp()}
    >
      {/* <NextLink href={`/${path}`} passHref> */}
      {text}
      {/* </NextLink> */}
    </Center>
  );
};

export default SigninBtn;
