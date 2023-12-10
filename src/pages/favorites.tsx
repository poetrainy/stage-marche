import type { NextPage } from "next";

import Layout from "src/components/Layout";
import ContentsBase from "src/components/ContentsBase";
import StageCardLargeWrapper from "src/components/Stage/CardLargeWrapper";
import StageCardSmallWrapper from "src/components/Stage/CardSmallWrapper";

import { MOCK_STAGES } from "src/constants/mock";

const Fav: NextPage = () => {
  const ComponentArray = [
    {
      heading: "公演予定の作品",
      component: <StageCardLargeWrapper stages={MOCK_STAGES} />,
    },
    {
      heading: "公演が終了した作品",
      component: <StageCardSmallWrapper stages={MOCK_STAGES} />,
    },
  ];

  return (
    <Layout isFixedObjectsView>
      <ContentsBase data={ComponentArray} />
    </Layout>
  );
};

export default Fav;
