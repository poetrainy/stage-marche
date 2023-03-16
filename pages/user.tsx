import type { NextPage } from 'next';

import MainContents from 'src/components/MainContents';

const User: NextPage = () => {
  const Component = () => (
    <>
      <>てすと</>
    </>
  );

  return <MainContents component={<Component />} />;
};

export default User;
