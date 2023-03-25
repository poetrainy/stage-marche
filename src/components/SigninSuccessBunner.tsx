import { FC, useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { firebase, auth, firebaseApp } from 'src/libs/firebase';

import useAuth from 'src/hooks/useAuth';

const SigninSuccessBunner: FC = () => {
  const [user, setUser] = useState<string>();
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);
  const [isOpenApp, setIsOpenApp] = useState<boolean>(false);
  const isAuth = useAuth();
  const VISIBLE_TIMER: number = 3000;
  const [firebaseUsers, setFirebaseUsers] = useState<string[]>();

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

  // useEffect(() => {
  //   getFirebase();
  // }, []);

  // const test = async () => {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   await auth.signInWithPopup(provider).catch(alert);
  //   auth.onAuthStateChanged(async (user) => {
  //     if (!!user) {
  //       // @ts-ignore
  //       const email = user?.providerData[0]?.email;
  //       const users = firebaseUsers?.filter((element) => element === email);
  //       // console.log(users);
  //     }
  //   });
  // };

  useEffect(() => {
    if (isOpenApp) {
      if (isAuth) {
        auth.onAuthStateChanged(async (user) => {
          if (!!user) {
            // @ts-ignore
            const email = user?.providerData[0]?.email;
            const users = firebaseUsers?.filter((element) => element === email);
            // console.log(users);
            setIsNewUser(!isNewUser);
          }
        });
        setTimeout(() => {
          setIsVisible(!isVisible);
          setTimeout(() => {
            setIsDisplay(false);
          }, VISIBLE_TIMER);
        }, VISIBLE_TIMER);
      }
    } else {
      setIsOpenApp(!isOpenApp);
    }
  }, [isAuth]);

  // 新規会員登録だった場合->
  // 会員情報がないので undefined

  return (
    <>
      {isDisplay && (
        <Box
          w={'90vw'}
          bg={'white'}
          p={'16px 12px'}
          fontWeight={'bold'}
          borderColor={'skyblue'}
          borderStyle={'solid'}
          borderWidth={'3px'}
          borderRadius={'8px'}
          pos={'fixed'}
          inset={'52px 5vw auto 5vw'}
          zIndex={20}
          transition={'opacity 0.4s, transform 0.4s'}
          textStyle={'deepShadow'}
          sx={{
            ...(isVisible && isAuth
              ? {
                  opacity: 1,
                  transform: 'translateY(0)',
                }
              : {
                  opacity: 0,
                  transform: 'translateY(-16px)',
                }),
          }}
        >
          <Text as={'span'} color={'primary'}>
            {user}
          </Text>
          <Text as={'span'} color={'black500'}>
            さん、
            <br />
            {isNewUser ? 'はじめまして' : 'おかえりなさい'}！
          </Text>
        </Box>
      )}
    </>
  );
};

export default SigninSuccessBunner;
