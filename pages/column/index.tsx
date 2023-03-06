import type { NextPage } from 'next';
import ColumnBunner from 'src/components/Column/Bunner';

import SigninGuidance from 'src/components/SigninGuidance';
import MainContents from 'src/components/MainContents';
import SubContents from 'src/components/SubContents';

import { columnArray } from 'src/libs/column';
import { loginState } from 'src/libs/signin';

const Column: NextPage = () => {
  const ComponentArray = [
    {
      text: '気になる公演とあわせて読みたい',
      component: <ColumnBunner data={columnArray} />,
    },
    {
      text: '最近読まれています',
      component: <ColumnBunner data={columnArray} />,
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

export default Column;
