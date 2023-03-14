import type { NextPage } from 'next';
import ColumnBunner from 'src/components/Column/Bunner';

import MainContents from 'src/components/MainContents';
import SubContents from 'src/components/SubContents';

import { columnArray } from 'src/libs/column';

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

  return (
    <MainContents component={<SubContents data={ComponentArray} />} search />
  );
};

export default Column;
