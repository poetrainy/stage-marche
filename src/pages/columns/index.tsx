import type { NextPage } from "next";
import ColumnBunner from "src/components/Column/Bunner";

import Layout from "src/components/Layout";
import ContentsBase from "src/components/ContentsBase";

import { MOCK_COLUMNS } from "src/constants/mock";

const Columns: NextPage = () => {
  const ComponentArray = [
    {
      heading: "気になる公演とあわせて読みたい",
      component: <ColumnBunner column={MOCK_COLUMNS} />,
    },
    {
      heading: "最近読まれています",
      component: <ColumnBunner column={MOCK_COLUMNS} />,
    },
  ];

  return (
    <Layout isSearch isFixedObjectsView>
      <ContentsBase data={ComponentArray} />
    </Layout>
  );
};

export default Columns;
