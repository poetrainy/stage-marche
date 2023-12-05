import type { NextPage } from "next";

import Layout from "src/components/Layout";
import StageBunnerSmall from "src/components/Stage/BunnerSmall";
import ContentsBase from "src/components/ContentsBase";

import { MOCK_STAGES_BASE } from "src/constants/stage";
import StageBunnerLargeWrapper from "src/components/Stage/BunnerLargeWrapper";

const Fav: NextPage = () => {
  const ComponentArray = [
    {
      text: "公演予定の作品",
      component: <StageBunnerLargeWrapper stages={MOCK_STAGES_BASE} />,
    },
    {
      text: "公演が終了した作品",
      component: <StageBunnerSmall data={MOCK_STAGES_BASE} />,
    },
  ];

  return <Layout component={<ContentsBase data={ComponentArray} />} />;
};

export default Fav;
