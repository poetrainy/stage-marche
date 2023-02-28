import type { NextPage } from 'next';

import Contents from 'src/components/Contents';
import SigninGuidance from 'src/components/SigninGuidance';

import { loginState } from 'src/libs/signin';

const Ticket: NextPage = () => {
  const Component = () => {
    return <>{!loginState && <SigninGuidance />}</>;
  };

  return <Contents component={<Component />} />;
};

export default Ticket;
