import { useEffect, useState } from 'react';

const useGetDay = () => {
  const [date, setDate] = useState<{ y: number; m: number; d: number }>();

  useEffect(() => {
    let today = new Date();
    let y: number = today.getFullYear();
    let m: number = today.getMonth() + 1;
    let d: number = today.getDate();
    setDate({ y: y, m: m, d: d });
  }, []);

  return date;
};

export default useGetDay;
