import type { NextPage } from "next";
import ColumnBunner from "src/components/Column/Bunner";

import Layout from "src/components/Layout";
import ContentsBase from "src/components/ContentsBase";

import { MOCK_COLUMNS_BASE } from "src/constants/column";

const Column: NextPage = () => {
  const ComponentArray = [
    {
      text: "気になる公演とあわせて読みたい",
      component: <ColumnBunner column={MOCK_COLUMNS_BASE} />,
    },
    {
      text: "最近読まれています",
      component: <ColumnBunner column={MOCK_COLUMNS_BASE} />,
    },
  ];

  return <Layout component={<ContentsBase data={ComponentArray} />} search />;
};

export default Column;
