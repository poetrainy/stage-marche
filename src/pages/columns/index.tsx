import type { NextPage } from "next";
import ColumnCard from "src/components/Column/Card";

import Layout from "src/components/Layout";
import ContentsBase from "src/components/ContentsBase";

import { MOCK_COLUMNS } from "src/constants/mock";

const Columns: NextPage = () => {
  const components = [
    {
      heading: "気になる公演とあわせて読みたい",
      component: <ColumnCard column={MOCK_COLUMNS} />,
    },
    {
      heading: "最近読まれています",
      component: <ColumnCard column={MOCK_COLUMNS} />,
    },
  ];

  return (
    <Layout isSearch isFixedObjectsView>
      <ContentsBase data={components} />
    </Layout>
  );
};

export default Columns;
