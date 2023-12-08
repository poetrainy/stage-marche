import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

import OriginalSpacer from "src/components/OriginalSpacer";
import StageInformation from "src/components/Stage/Information";
import StageTypeComponent from "src/components/Stage/Type";
import StageSeat from "src/components/Stage/Seat";
import StageGenre from "src/components/Stage/Genre";
import ColumnBunner from "src/components/Column/Bunner";
import Back from "src/components/Back";
import CoverImage from "src/components/CoverImage";
import LayoutWithMaxWidth from "src/components/LayoutWithMaxWidth";
import StageCasts from "src/components/Stage/Casts";
import StageMovie from "src/components/Stage/Movie";

import { StageType } from "src/types/stage";

import { MOCK_STAGES, MOCK_CASTS, MOCK_COLUMNS } from "src/constants/mock";

import { prefectureWithFixedText } from "src/libs/convert";

import FAVORITE_ICON from "src/assets/svg/navigation_favorite.svg";

type Props = {
  id: string;
};

type RecommendType = {
  title: string;
  component: JSX.Element;
};

const StageId: NextPage<Props> = ({ id }) => {
  const stage = MOCK_STAGES.find((stage) => stage.id === id)!;
  const casts = stage.casts.map(
    (cast) => MOCK_CASTS.find((mockCast) => mockCast.id === cast)!
  );
  const ticketArea = useRef<HTMLDivElement>(null);
  const [ticketAreaHeight, setTicketAreaHeight] = useState<number>(0);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [isTicketAreaOpen, setIsTicketAreaOpen] = useState(true);

  useEffect(() => {
    setTicketAreaHeight(ticketArea.current?.clientHeight ?? 0);
    settingTicketAreaStyle(!isTicketAreaOpen);

    if (!isLoad) {
      setTimeout(() => {
        setIsLoad(true);
      }, 1000);
    }
  }, []);

  const settingTicketAreaStyle = (isOpen: boolean) => {
    // @ts-ignore
    ticketArea.current.style.height = isOpen ? `${ticketAreaHeight}px` : "0";
    // @ts-ignore
    ticketArea.current.style.paddingTop = isOpen ? "calc(24px + 5vw)" : "0";
    // @ts-ignore
    ticketArea.current.style.paddingBottom = isOpen ? "5vw" : "0";

    setIsTicketAreaOpen(isOpen);
  };

  const Img = () => (
    <Box w="111.11111%" h="264px" overflow="hidden" pos="relative" m="0 -5.5%">
      <Back />
      <CoverImage path={`stage_img_${stage.id}_01.jpg`} />
    </Box>
  );

  const StageInfo = () => (
    <Box>
      <StageTypeComponent type={stage.type} />
      <OriginalSpacer size="4px" />
      <Text fontSize="2.2rem" fontWeight="bold">
        {stage.name}
      </Text>
      <OriginalSpacer size="2px" />
      <StageGenre data={stage} />
      <OriginalSpacer size="8px" />
      <Text color="black500" fontSize="1.2rem">
        {stage.description}
      </Text>
    </Box>
  );

  const Recommend = () => {
    const recommendArray: RecommendType[] = [
      {
        title: "関連動画",
        component: <StageMovie urls={stage.youtube} />,
      },
      {
        title: "あわせて読みたい",
        component: <ColumnBunner column={MOCK_COLUMNS} />,
      },
      {
        title: "出演者",
        component: <StageCasts casts={casts} />,
      },
    ];

    return (
      <Flex flexDir="column" gap="32px">
        {recommendArray.map((item, i) => (
          <Flex as="section" key={item.title + i} flexDir="column" gap="16px">
            <Text as="h2" fontSize="1.8rem" fontWeight="bold">
              {item.title}
            </Text>
            {item.component}
          </Flex>
        ))}
      </Flex>
    );
  };

  return (
    <LayoutWithMaxWidth>
      <Flex flexDir="column" gap="24px" pb="48px">
        <Img />
        <Flex flexDir="column" gap="24px" textStyle="bodyW">
          <StageInfo />
          <Box>
            {!isLoad && (
              <Center as="p" w="100%" h="56px">
                チケット情報読み込み中…
              </Center>
            )}
            <Flex
              as="h2"
              alignItems="center"
              w="100%"
              h="56px"
              color="white"
              bg="primary"
              p="0 24px"
              fontWeight="bold"
              rounded="full"
              pos="relative"
              zIndex={3}
              transition="opacity 0.1s"
              onClick={() => settingTicketAreaStyle(!isTicketAreaOpen)}
              sx={{
                ...(isLoad
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                    }),
                "&::before": {
                  content: '""',
                  display: "block",
                  bg: "white",
                  w: "4px",
                  h: "12px",
                  position: "absolute",
                  inset: "auto 24px auto auto",
                  transform: "rotateZ(45deg)",
                },
                "&::after": {
                  content: '""',
                  display: "block",
                  bg: "white",
                  w: "4px",
                  h: "12px",
                  position: "absolute",
                  inset: "auto 30px auto auto",
                  transform: "rotateZ(-45deg)",
                },
              }}
            >
              チケット詳細
            </Flex>
            <Flex
              flexDir="column"
              gap="10vw"
              w="111.11111%"
              bg="white"
              p="calc(24px + 5vw) 5vw 5vw"
              m="0 -5.5%"
              transform="translateY(-28px)"
              rounded="5vw"
              textStyle="lightShadow"
              overflow="hidden"
              ref={ticketArea}
              sx={{
                ...(isLoad
                  ? {
                      transition:
                        "height 0.15s, padding-top 0.15s, padding-bottom 0.15s",
                    }
                  : {
                      opacity: 0,
                    }),
              }}
            >
              {stage.schedule.map((item, i) => (
                <Box
                  key={item.place + i}
                  sx={{
                    ...(i > 0 && {
                      position: "relative",
                      "&::before": {
                        content: '""',
                        display: "block",
                        w: "95%",
                        h: "1px",
                        bg: "black300",
                        margin: "auto",
                        position: "absolute",
                        inset: "-5vw 0 auto 0",
                      },
                    }),
                  }}
                >
                  <Flex alignItems="center" gap="16px" w="100%">
                    <Text
                      w="calc(100% - 16px - 32px)"
                      color="black800"
                      fontWeight="bold"
                      fontSize="1.8rem"
                    >
                      {prefectureWithFixedText(item.prefecture)}
                    </Text>
                    <Center as="button" w="32px" h="24px">
                      <Box as={FAVORITE_ICON} w="24px" h="24px" />
                    </Center>
                  </Flex>
                  <OriginalSpacer size="6px" />
                  <StageInformation stage={stage} time prefecture index={i} />
                  <OriginalSpacer size="16px" />
                  <Box bg="#F6F6F6" p="16px" rounded="16px">
                    {item.seat.monopoly && (
                      <>
                        <Text fontWeight="bold" fontSize="1.5rem">
                          【初心者おすすめ】B席
                        </Text>
                        <OriginalSpacer size="4px" />
                        <Flex
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box w="70%">
                            <Text fontSize="1.1rem" color="black500">
                              ステージマルシェ独占販売の特別ビギナーシートです。後方座席でゆったり観劇！
                            </Text>
                            <OriginalSpacer size="8px" />
                            <Text
                              color="pink"
                              fontSize="2rem"
                              fontWeight="bold"
                            >
                              ¥{item.seat.monopoly.price.toLocaleString()}
                            </Text>
                          </Box>
                          <StageSeat status={item.seat.monopoly.status} />
                        </Flex>
                        <OriginalSpacer size="12px" />
                        <Box w="95%" h="1px" bg="black300" m="0 auto" />
                        <OriginalSpacer size="12px" />
                      </>
                    )}
                    <Flex gap="10px">
                      {item.seat.other.map((content, i) => (
                        <Box w="fit-content" key={content.class + i}>
                          <Text
                            fontWeight="bold"
                            fontSize="1.4rem"
                            textAlign="center"
                          >
                            {content.class}席
                          </Text>
                          <OriginalSpacer size="4px" />
                          <StageSeat status={content.status} />
                          <OriginalSpacer size="4px" />
                          <Text
                            color="black600"
                            fontWeight="bold"
                            fontSize="1.3rem"
                            textAlign="center"
                          >
                            ¥{content.price.toLocaleString()}
                          </Text>
                        </Box>
                      ))}
                    </Flex>
                  </Box>
                </Box>
              ))}
            </Flex>
          </Box>
          <Recommend />
        </Flex>
      </Flex>
    </LayoutWithMaxWidth>
  );
};

export default StageId;

export const getStaticPaths = async () => {
  const paths = MOCK_STAGES.map((item: StageType) => ({
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
      id: params.id,
    },
  };
};
