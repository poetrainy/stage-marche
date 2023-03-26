import { FC, useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { firebaseApp } from 'src/libs/firebase';

import useGetEmail from 'src/hooks/useGetEmail';

const SigninSuccessBunner: FC = () => {
  const email = useGetEmail();
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDisplay, setIsDisplay] = useState<boolean>(true);
  const VISIBLE_TIMER_FAST: number = 2000;
  const VISIBLE_TIMER_LATEST: number = 2500;

  const getFirebase = async () => {
    const db = getFirestore(firebaseApp);
    const col = collection(db, 'user');
    const querySnapshot = await getDocs(col);
    const ret: any = [];
    const retId: string[] = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc.data());
      retId.push(doc.id);
    });
    console.log(ret, retId, email);
    const userIndex = retId.findIndex((item) => item === email);
    const user = ret[userIndex];

    if (Object.keys(user).length === 1) {
      setIsNewUser(true);
    } else {
      setIsNewUser(false);
    }
  };

  const visibleFunc = (flag: boolean) => {
    setTimeout(
      () => {
        setIsVisible(flag);
        if (flag) {
          visibleFunc(false);
        } else {
          setTimeout(() => {
            setIsDisplay(false);
          }, VISIBLE_TIMER_FAST);
        }
      },
      flag ? VISIBLE_TIMER_FAST : VISIBLE_TIMER_LATEST
    );
  };

  useEffect(() => {
    if (email) {
      setTimeout(() => {
        getFirebase();
      }, 500);
      visibleFunc(true);
    }
  }, [email]);

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
            ...(isVisible && email
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
            {email}
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
