import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { firebaseApp } from "src/libs/firebase";

import useGetEmail from "src/hooks/useGetEmail";
import { AuthType } from "src/types/auth";

const useGetFirestoreData = () => {
  // const [firestore, setFirestore] = useState<any>();
  const [firestore, setFirestore] = useState<{
    firestore: AuthType;
    id: number;
  }>();
  const email = useGetEmail();

  const getFirebase = async () => {
    const db = getFirestore(firebaseApp);
    const col = collection(db, "user");
    const querySnapshot = await getDocs(col);
    const ret: any = [];
    const retId: string[] = [];
    querySnapshot.forEach((doc) => {
      ret.push(doc.data());
      retId.push(doc.id);
    });
    const userId = ret.findIndex((item: AuthType) => item.data.email === email);
    setFirestore({ firestore: ret[userId], id: userId });
  };

  useEffect(() => {
    if (email) {
      getFirebase();
    }
  }, [email]);

  return firestore;
};

export default useGetFirestoreData;
