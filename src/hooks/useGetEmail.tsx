import { useEffect, useState } from 'react';
import { auth } from 'src/libs/firebase';

const useGetEmail = () => {
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!!user) {
        // @ts-ignore
        setEmail(user?.providerData[0].email);
        // setEmail(user?.providerData[0]);
      } else {
        setEmail(undefined);
      }
    });
  }, []);

  return email;
};

export default useGetEmail;
