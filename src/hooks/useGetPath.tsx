import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useGetPath = () => {
  const [path, setPath] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    setPath(router.pathname);
  }, []);

  return path;
};

export default useGetPath;
