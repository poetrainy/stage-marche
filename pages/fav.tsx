import type { NextPage } from 'next';

import MainContents from 'src/components/MainContents';
import SigninGuidance from 'src/components/SigninGuidance';
import StageBunnerLarge from 'src/components/Stage/BunnerLarge';
import StageBunnerSmall from 'src/components/Stage/BunnerSmall';
import SubContents from 'src/components/SubContents';

import { loginState } from 'src/libs/signin';
import { stageArray } from 'src/libs/stage';

const Fav: NextPage = () => {
  const ComponentArray = [
    {
      text: '公演予定の作品',
      component: <StageBunnerLarge data={stageArray} />,
    },
    {
      text: '公演が終了した作品',
      component: <StageBunnerSmall data={stageArray} />,
    },
  ];

  const Component = () => {
    return (
      <>
        {loginState ? (
          <SubContents data={ComponentArray} />
        ) : (
          <SigninGuidance />
        )}
      </>
    );
  };

  return <MainContents component={<Component />} />;
};

export default Fav;
