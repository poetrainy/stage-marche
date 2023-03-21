import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { firebase, auth } from 'src/libs/firebase';

const SignUp: NextPage = () => {
  const router = useRouter();
  const [hoge, setHoge] = useState<string>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!!user) {
        // @ts-ignore
        setHoge(user.email);
      }
    });
  }, []);

  // const signUp = async (e: { preventDefault: () => void }) => {
  const signUp = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider).catch(alert);
      router.push('/enquete');
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="wrapper">
        {/* <form className="auth" onSubmit={signUp}> */}
        <button className="auth-btn" onClick={() => signUp()}>
          {/* <button className="auth-btn" type="submit"> */}
          Googleでログイン
        </button>
        <div>{hoge ? <>{hoge}</> : <>してない</>}</div>
        {/* </form> */}
      </div>
    </>
  );
};

export default SignUp;
