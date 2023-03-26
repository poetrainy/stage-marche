import { FC, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import OriginalSpacer from 'src/components/OriginalSpacer';
// import SigninBtn from 'src/components/SigninBtn';
import PreText from 'src/components/PreText';

import { signinGuidanceText } from 'src/libs/signin';
import { firebase, auth, firebaseApp } from 'src/libs/firebase';

import { signinGuidanceTextType } from 'src/types/signin';

import useGetPath from 'src/hooks/useGetPath';

const SigninGuidance: FC = () => {
  const [guidance, setGuidance] = useState<signinGuidanceTextType>();
  const [firebaseUsers, setFirebaseUsers] = useState<string[]>();
  const path = useGetPath();
  const router = useRouter();

  const text = 'Googleでログイン';

  useEffect(() => {
    for (let i = 0; i < signinGuidanceText.length; i++) {
      if (`/${signinGuidanceText[i].path}` === path) {
        setGuidance(signinGuidanceText[i]);
      }
    }
  }, [path]);

  const getFirebase = async () => {
    const db = getFirestore(firebaseApp);
    const col = collection(db, 'user');
    const querySnapshot = await getDocs(col);
    // const ret: any = [];
    const retId: string[] = [];
    querySnapshot.forEach((doc) => {
      // ret.push(doc.data());
      retId.push(doc.id);
    });
    // console.log(retId);
    setFirebaseUsers(retId);
  };

  useEffect(() => {
    getFirebase();
  }, []);

  const signUp = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      auth.onAuthStateChanged(async (user) => {
        if (!!user) {
          // @ts-ignore
          const email = user?.providerData[0]?.email;
          const users = firebaseUsers?.filter((element) => element === email);
          if (
            users !== undefined &&
            users.length === 0 &&
            typeof email === 'string'
          ) {
            const db = firebase.firestore();
            const userRef = db.collection('user').doc(email);
            await userRef.set({
              data: user?.providerData[0],
            });
            router.push('/enquete');
          } else {
            router.push('/');
          }
        }
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      {guidance && (
        <Center
          flexDir={'column'}
          h={'calc(100vh - 64px - 32px - 40px - 96px)'}
          m={'auto'}
        >
          <Box as={'img'} src={`/img/guidance_${guidance.path}.svg`} />
          <OriginalSpacer size={'32px'} />
          <Center flexDir={'column'} gap={'12px'} w={'fit-content'}>
            <PreText text={guidance.heading} />
            <Text
              color={'black600'}
              fontSize={'1.2rem'}
              lineHeight={'2.2rem'}
              textAlign={'center'}
            >
              {guidance.text}
            </Text>
          </Center>
          <OriginalSpacer size={'32px'} />
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
            _hover={{
              cursor: 'pointer',
            }}
          >
            {text}
          </Center>
        </Center>
      )}
    </>
  );
};

export default SigninGuidance;
