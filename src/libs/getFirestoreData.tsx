// import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

import { firebaseApp } from "src/libs/firebase";

import useGetEmail from "src/hooks/useGetEmail";
import { AuthType } from "src/types/auth";

// const useGetFirestoreData = () => {
// const [firestore, setFirestore] = useState<any>();
// const [firestore, setFirestore] = useState<{
//   firestore: AuthType;
//   id: number;
// }>();
const email = useGetEmail();
let firestoreData: any = undefined;

const getFirebase = async (email: string) => {
  // if (email) {
  const db = getFirestore(firebaseApp);
  const col = collection(db, "user");
  const querySnapshot = await getDocs(col);
  const ret: any = [];
  const retId: string[] = [];
  querySnapshot.forEach((doc) => {
    ret.push(doc.data());
    retId.push(doc.id);
    // console.log(doc.id);
  });
  // console.log(ret, retId);
  // console.log({ firestore: ret[userId], id: userId }, email);

  if (ret !== undefined) {
    const userId = ret.findIndex((item: any) => item.data.email === email);
    firestoreData = { firestore: ret[userId], id: userId };
  }
  // const firestore = { firestore: ret[userId], id: userId };

  // setFirestore(userId);
  // setFirestore({ firestore: ret[userId], id: userId });
  // return firestore;
  // }
};

// useEffect(() => {
if (email) {
  // setTimeout(() => {
  getFirebase(email);
  // console.log(firestore);
  // }, 5000);
}
// }, [email]);

// useEffect(() => {
//   if (firestore) {
//   }
// }, [firestore]);
// }, [email]);
// return firestore;
// };

export default firestoreData && firestoreData;
// export default useGetFirestoreData;
