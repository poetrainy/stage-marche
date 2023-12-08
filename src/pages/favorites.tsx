import type { NextPage } from "next";

import Layout from "src/components/Layout";
import StageBunnerSmall from "src/components/Stage/BunnerSmall";
import ContentsBase from "src/components/ContentsBase";
import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";

import { MOCK_STAGES } from "src/constants/mock";

const Fav: NextPage = () => {
  const ComponentArray = [
    {
      heading: "公演予定の作品",
      component: <StageBunnerLargeWrapper stages={MOCK_STAGES} />,
    },
    {
      heading: "公演が終了した作品",
      component: <StageBunnerSmall stages={MOCK_STAGES} />,
    },
  ];

  return (
    <Layout isFixedObjectsView>
      <ContentsBase data={ComponentArray} />
    </Layout>
  );
};

export default Fav;
