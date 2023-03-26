import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { firebase, auth, firebaseApp } from 'src/libs/firebase';

import useGetEmail from 'src/hooks/useAuth';

const useGetFirestoreData = () => {
  const email = useGetEmail();

  const getFirebase = async () => {
    if (email) {
      const db = getFirestore(firebaseApp);
      const col = collection(db, 'user');
      const querySnapshot = await getDocs(col);
      const ret: any = [];
      const retId: string[] = [];
      querySnapshot.forEach((doc) => {
        ret.push(doc.data());
        retId.push(doc.id);
      });
      // console.log(retId);
      // setFirebaseUsers(retId);
    }
  };

  useEffect(() => {
    if (email) {
      // @ts-ignore
      setEmail(getAuth.email);
    }
  }, [email]);

  return email;
};

export default useGetFirestoreData;
