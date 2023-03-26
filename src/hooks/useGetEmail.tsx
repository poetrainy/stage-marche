import { useEffect, useState } from 'react';
import useAuth from 'src/hooks/useAuth';

const useGetEmail = () => {
  const getAuth = useAuth();
  const [email, setEmail] = useState<string>();

  useEffect(() => {
    if (getAuth) {
      // @ts-ignore
      setEmail(getAuth.email);
    }
  }, [getAuth]);

  return email;
};

export default useGetEmail;
