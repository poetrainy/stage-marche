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

import { StageType } from "src/types/stage";

import { PREFECTURES } from "src/constants/stage";
import { MOCK_STAGES, MOCK_CASTS, MOCK_COLUMNS } from "src/constants/mock";

import FAVORITE_ICON from "src/assets/svg/navigation_favorite.svg";

import { imageWithDirectoryPath } from "src/libs/imageWithDirectoryPath";
import CoverImage from "src/components/CoverImage";

type Props = {
  id: string;
};

type RecommendType = {
  title: string;
  component: JSX.Element;
};

const StageId: NextPage<Props> = ({ id }) => {
  const stage = MOCK_STAGES.find(({ path }) => path === id)!;
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
    <Box w="100vw" h="264px" pos="relative">
      <Back />
      <CoverImage path={`stage_img_${stage.path}_01.jpg`} />
    </Box>
  );

  const StageInfo = () => (
    <Box textStyle="bodyW">
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

  const Youtube = () => (
    <Flex flexDirection="column" gap="12px">
      {stage.youtube.map((item) => (
        <Box
          key={item}
          w="100%"
          pt="calc(100% / 16 * 9)"
          pos="relative"
          rounded="20px"
          overflow="hidden"
        >
          <Box
            as="iframe"
            w="100%"
            h="100%"
            pos="absolute"
            inset="0 0 auto auto"
            src={`https://www.youtube.com/embed/${item}`}
            title="YouTube video player"
            frameBorder={0}
            allow={
              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            }
            allowFullScreen
          />
        </Box>
      ))}
    </Flex>
  );

  const Cast = () => (
    <Flex as="ul" gap="14px 4%" flexWrap="wrap" w="100%">
      {casts.map((cast) => (
        <Box as="li" key={cast.id} w="22%">
          <Box
            w="100%"
            pt="100%"
            bg="black600"
            rounded="full"
            overflow="hidden"
            pos="relative"
          >
            <Image
              src={imageWithDirectoryPath(`cast_${cast.id}.jpg`)}
              w="100%"
              h="100%"
              pos="absolute"
              inset="0 0 auto auto"
            />
          </Box>
          <OriginalSpacer size="8px" />
          <Text fontSize="1.2rem" fontWeight="bold" textAlign="center">
            {cast.name}
          </Text>
        </Box>
      ))}
    </Flex>
  );

  const Recommend = () => {
    const recommendArray: RecommendType[] = [
      {
        title: "関連動画",
        component: <Youtube />,
      },
      {
        title: "あわせて読みたい",
        component: <ColumnBunner column={MOCK_COLUMNS} />,
      },
      {
        title: "キャスト",
        component: <Cast />,
      },
    ];

    return (
      <Flex flexDir="column" gap="32px" textStyle="bodyW">
        {recommendArray.map((item, i) => (
          <Box as="section" key={item.title + i}>
            <Text as="h2" fontSize="1.8rem" fontWeight="bold">
              {item.title}
            </Text>
            <OriginalSpacer size="16px" />
            {item.component}
          </Box>
        ))}
      </Flex>
    );
  };

  return (
    <>
      <Img />
      <OriginalSpacer size="24px" />
      <StageInfo />
      <OriginalSpacer size="20px" />
      {/* チケット */}
      <>
        {!isLoad && (
          <Center as="p" w="100%" h="56px">
            チケット情報読み込み中…
          </Center>
        )}
        <Flex
          as="h2"
          alignItems="center"
          h="56px"
          color="white"
          bg="primary"
          p="0 24px"
          fontWeight="bold"
          rounded="full"
          pos="relative"
          zIndex={3}
          transition="opacity 0.1s"
          textStyle="bodyW"
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
          w="100vw"
          bg="white"
          px="5vw"
          pt="calc(24px + 5vw)"
          pb="5vw"
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
                  {PREFECTURES[item.prefecture]}公演
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
                    <Flex justifyContent="space-between" alignItems="center">
                      <Box w="70%">
                        <Text fontSize="1.1rem" color="black500">
                          ステージマルシェ独占販売の特別ビギナーシートです。後方座席でゆったり観劇！
                        </Text>
                        <OriginalSpacer size="8px" />
                        <Text color="pink" fontSize="2rem" fontWeight="bold">
                          ¥{item.seat.monopoly.price}
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
                        ¥{content.price}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          ))}
        </Flex>
        {!isTicketAreaOpen && <OriginalSpacer size="28px" />}
      </>
      <Recommend />
      <OriginalSpacer size="56px" />
    </>
  );
};

export default StageId;

export const getStaticPaths = async () => {
  const paths = MOCK_STAGES.map((item: StageType) => ({
    params: { id: item.path },
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
