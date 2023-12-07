import type { NextPage } from "next";

import { CastType } from "src/types/stage";
import { MOCK_CASTS } from "src/constants/mock";

type Props = {
  cast: CastType;
};

const CastId: NextPage<Props> = ({ cast }) => {
  return (
    <>
      {cast.id}
      {/* <Box textStyle="bodyW">
        <ColumnDate data={column} />
        <OriginalSpacer size="4px" />
        <Text fontSize="2rem" fontWeight="bold">
          {column.title}
        </Text>
        <OriginalSpacer size="8px" />
        <StageGenre data={column} isColumn />
      </Box>
      <OriginalSpacer size="24px" />
      <Text as="pre" bg="white" p="24px 5vw" lineHeight="2.6rem">
        {column.text}
      </Text> */}
    </>
  );
};

export default CastId;

export const getStaticPaths = async () => {
  const paths = MOCK_CASTS.map((item: CastType) => ({
    params: { id: item.id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  return {
    props: {
      cast: MOCK_CASTS.find(({ id }) => id === params.id)!,
    },
  };
};
