import type { NextPage } from 'next';

import MainContents from 'src/components/MainContents';
import SigninGuidance from 'src/components/SigninGuidance';

import { loginState } from 'src/libs/signin';

const Ticket: NextPage = () => {
  const Component = () => {
    return <>{loginState && <SigninGuidance />}</>;
  };

  return <MainContents component={<Component />} />;
};

export default Ticket;
