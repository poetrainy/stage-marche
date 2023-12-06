import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { FC, FormEvent, SVGProps, useState } from "react";

import OriginalSpacer from "src/components/OriginalSpacer";
import PreText from "src/components/PreText";

import { STAGE_GENRES, prefectureArray } from "src/constants/stage";

import SvgImageEnqueteGenre from "src/assets/svg/enquete_1_genre.svg";
import SvgImageEnquetePrefecture from "src/assets/svg/enquete_2_prefecture.svg";
import SvgImageEnqueteComplete from "src/assets/svg/enquete_3_complete.svg";

const Enquete: NextPage = () => {
  const [genre, setGenre] = useState<number[]>([]);
  const [prefecture, setPrefecture] = useState<number>(100);
  const [isGenreLengthArray, setIsGenreLengthArray] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const [page, setPage] = useState<number>(0);

  const setPageFunc = () => {
    setPage(page + 1);
  };

  const setGenreFunc = (input: number) => {
    let keepGenre = genre;
    let keepGenreLength = genre.length;
    for (let i = 0; i < genre.length; i++) {
      if (genre[i] === input) {
        keepGenre.splice(i, 1);
        break;
      }
    }
    if (keepGenre.length === keepGenreLength) {
      if (keepGenre.length < 3) {
        keepGenre.push(input);
      }
    }
    if (keepGenre.length === 3) {
      setIsGenreLengthArray([false, false, true]);
    } else if (keepGenre.length === 2) {
      setIsGenreLengthArray([false, true, false]);
    } else if (keepGenre.length === 1) {
      setIsGenreLengthArray([true, false, false]);
    } else {
      setIsGenreLengthArray([false, false, false]);
    }
    setGenre(keepGenre);
  };

  const setPrefectureFunc = (e: FormEvent<HTMLDivElement>) => {
    // @ts-ignore
    setPrefecture(e.currentTarget.value);
  };

  const SignInEnquetePrefecture = () => {
    return (
      <Center h="210px" textStyle="bodyW">
        <Box
          w="80%"
          h="72px"
          rounded="full"
          overflow="hidden"
          pos="relative"
          sx={{
            "&::before": {
              content: '""',
              display: "flex",
              w: "64px",
              h: "72px",
              bg: "skyblue",
              position: "absolute",
              inset: "0 0 auto auto",
            },
          }}
        >
          <Box
            as="select"
            name="prefecture"
            value={prefecture}
            w="100%"
            h="100%"
            fontSize="1.4rem"
            fontWeight="bold"
            p="0 32px"
            appearance="none"
            // @ts-ignore
            onChange={(e) => setPrefectureFunc(e)}
          >
            <Box as="option" value={100}>
              都道府県を選択
            </Box>
            {prefectureArray.map((item, i) => (
              <Box as="option" value={i} key={item + i}>
                {item}
              </Box>
            ))}
          </Box>
        </Box>
      </Center>
    );
  };

  const SignInEnqueteComplete = () => {
    return (
      <Center
        as="p"
        color="black600"
        fontSize="1.2rem"
        lineHeight="2.2rem"
        textAlign="center"
      >
        会員登録をしていただき、ありがとうございます！
        <br />
        さまざまな作品があなたを待っていますよ！
      </Center>
    );
  };

  const signInEnqueteText: {
    heading: string;
    image: FC<SVGProps<SVGElement>>;
    component: JSX.Element;
  }[] = [
    {
      heading: "好きな映画・ドラマ・小説・漫画の\nジャンルはなんですか？",
      image: SvgImageEnqueteGenre,
      component: (
        <Center
          gap="4px 8px"
          flexWrap="wrap"
          h="210px"
          px="8px"
          textStyle="bodyW"
        >
          {STAGE_GENRES.map((item: string, i) => (
            <Box
              key={0 + item + i}
              bg="white"
              textStyle="tagItem"
              onClick={() => setGenreFunc(i)}
              sx={{
                ...(isGenreLengthArray[2]
                  ? {
                      color: "#bdbdbd",
                    }
                  : {
                      color: "skyblue",
                    }),
                ...(isGenreLengthArray[0] &&
                  genre[0] === i && {
                    bg: "skyblue",
                    color: "white",
                  }),
                ...(isGenreLengthArray[1] &&
                  (genre[0] === i || genre[1] === i) && {
                    bg: "skyblue",
                    color: "white",
                  }),
                ...(isGenreLengthArray[2] &&
                  (genre[0] === i || genre[1] === i || genre[2] === i) && {
                    bg: "skyblue",
                    color: "white",
                  }),
              }}
            >
              {item}
            </Box>
          ))}
        </Center>
      ),
    },
    {
      heading: "お住まいの都道府県は\nどこですか？",
      image: SvgImageEnquetePrefecture,
      component: <SignInEnquetePrefecture />,
    },
    {
      heading: "おめでとう！🎉\n登録が完了しました！",
      image: SvgImageEnqueteComplete,
      component: <SignInEnqueteComplete />,
    },
  ];

  return (
    <>
      <Box w="100vw" overflow="hidden">
        <Box
          w="100vw"
          h="16px"
          bg="black300"
          pos="fixed"
          inset="0 0 auto auto"
          sx={{
            "&::before": {
              content: '""',
              display: "block",
              w: "100%",
              h: "100%",
              bg: "skyblue",
              transform: "translateX(-100%)",
              transition: "transform 0.4s",
              ...(page === 1 && {
                transform: "translateX(-50%)",
              }),
              ...(page === 2 && {
                transform: "translateX(0)",
              }),
            },
          }}
        />
        <Flex
          flexWrap="wrap"
          w={`calc(${signInEnqueteText.length} * 100vw)`}
          transform={`translateX(calc(${page} * -100vw))`}
          transition="transform 0.3s"
        >
          {signInEnqueteText.map((item, i) => (
            <Center
              key={item.heading}
              flexDir="column"
              w="100vw"
              minH="100vh"
              pb="16px"
              sx={{
                ">button": {
                  w: "232px",
                  h: "64px",
                  rounded: "full",
                  overflow: "hidden",
                  pos: "relative",
                  fontWeight: "bold",
                  "&:nth-of-type(1)": {
                    ...(isGenreLengthArray[0] && {
                      "&::before": {
                        w: "33%",
                      },
                    }),
                    ...(isGenreLengthArray[1] && {
                      "&::before": {
                        w: "66%",
                      },
                    }),
                    ...(isGenreLengthArray[2]
                      ? {
                          pointerEvents: "auto",
                          "&::before": {
                            w: "100%",
                          },
                        }
                      : {
                          pointerEvents: "none",
                        }),
                  },
                  "&:nth-of-type(2)": {
                    ...(Number(prefecture) !== 100
                      ? {
                          pointerEvents: "auto",
                          "&::before": {
                            w: "100%",
                          },
                        }
                      : {
                          pointerEvents: "none",
                        }),
                  },
                },
              }}
            >
              <PreText text={item.heading} />
              <OriginalSpacer size="24px" />
              <Image as={item.image} />
              <OriginalSpacer size="32px" />
              <>{item.component}</>
              <OriginalSpacer size="40px" />
              {i < 2 ? (
                <Center
                  as="button"
                  w="240px"
                  h="64px"
                  color="white"
                  bg="black300"
                  fontWeight="bold"
                  fontSize="1.6rem"
                  pos="relative"
                  onClick={() => setPageFunc()}
                  sx={{
                    "&::before": {
                      content: '""',
                      display: "block",
                      w: 0,
                      h: "100%",
                      bg: "skyblue",
                      position: "absolute",
                      inset: "0 auto auto 0",
                      transition: "width 0.4s",
                    },
                    "&::after": {
                      content: '""',
                      display: "block",
                      w: "28px",
                      h: "28px",
                      background:
                        'url("./img/enquete_icon_check.svg") no-repeat',
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      position: "absolute",
                    },
                  }}
                >
                  <Text as="span" pos="relative" zIndex={2}>
                    次へ
                  </Text>
                </Center>
              ) : (
                <Center
                  as={NextLink}
                  href="/"
                  passHref
                  display="flex"
                  w="240px"
                  h="64px"
                  color="white"
                  bg="greenToBlue"
                  rounded="full"
                  fontWeight="bold"
                  fontSize="1.6rem"
                >
                  舞台を探しに行く！
                </Center>
              )}
            </Center>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Enquete;
