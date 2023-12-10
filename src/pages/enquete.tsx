import { Box, Center, Flex, Image, Select, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FC, FormEvent, SVGProps, useState } from "react";

import OriginalSpacer from "src/components/OriginalSpacer";
import PreText from "src/components/PreText";

import { PREFECTURES } from "src/constants/stage";

import { pathWithAuthenticator } from "src/libs/convert";
import { onLocalStorageAuthenticate } from "src/libs/authenticate";

import SvgImageEnqueteGenre from "src/assets/svg/enquete_1_genre.svg";
import SvgImageEnquetePrefecture from "src/assets/svg/enquete_2_prefecture.svg";
import SvgImageEnqueteComplete from "src/assets/svg/enquete_3_complete.svg";

const STAGE_GENRES: string[] = [
  "歴史",
  "現代",
  "近未来",
  "ミステリー",
  "シリアス",
  "ラブ",
  "革命",
  "ほのぼの",
  "成長",
  "スポーツ",
  "学園",
  "実写化",
];

const Enquete: NextPage = () => {
  const router = useRouter();

  const [genre, setGenre] = useState<number[]>([]);
  const [prefecture, setPrefecture] = useState<string>("none");
  const [page, setPage] = useState<number>(0);
  const [buttonProgress, setButtonProgress] = useState<number>(0);

  const localStorageSignIn = () => {
    onLocalStorageAuthenticate("true");
    router.push(pathWithAuthenticator("/"));
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
          h="200px"
          px="8px"
          textStyle="bodyW"
        >
          {STAGE_GENRES.map((item: string, i) => (
            <Box
              key={item}
              as="button"
              type="button"
              bg="white"
              color={genre.length === 3 ? "#bdbdbd" : "skyblue"}
              textStyle="tagItem"
              onClick={() => {
                const includedGenre = genre.includes(i);
                const afterGenreLength = includedGenre
                  ? genre.length - 1
                  : genre.length + 1;

                setButtonProgress((prev) =>
                  afterGenreLength === 1
                    ? 100 / 3
                    : afterGenreLength === 2
                    ? (100 / 3) * 2
                    : afterGenreLength === 3 || genre.length === 3
                    ? 100
                    : 0
                );

                setGenre((prev) =>
                  includedGenre
                    ? prev.filter((p) => p !== i)
                    : genre.length !== 3
                    ? [...prev, i]
                    : prev
                );
              }}
              sx={{
                ...(genre.includes(i) && {
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
      component: (
        <Box
          as="select"
          appearance="none"
          value={prefecture}
          placeholder="都道府県を選択"
          w="70%"
          h="64px"
          fontSize="1.4rem"
          fontWeight="bold"
          p="0 32px"
          m="68px"
          rounded="full"
          onChange={(e: FormEvent<HTMLDivElement>) => {
            // @ts-ignore
            setPrefecture(e.target.value);
            // @ts-ignore
            if (e.target.value !== "none") {
              setButtonProgress(100);
            }
          }}
        >
          <Box as="option" value="none">
            都道府県を選択
          </Box>
          {PREFECTURES.map((item) => (
            <Box as="option" value={item} key={item}>
              {item}
            </Box>
          ))}
        </Box>
      ),
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
          alignItems="center"
          w={`calc(${signInEnqueteText.length + 1} * 100vw)`}
          minH="100vh"
          pt="16px"
          transform={`translateX(calc(${page} * -100vw))`}
          transition="transform 0.3s"
        >
          <Flex
            alignItems="center"
            w={`calc(${signInEnqueteText.length} * 100vw)`}
            h="fit-content"
            py="56px"
            pos="relative"
          >
            {signInEnqueteText.map((item) => (
              <Center key={item.heading} flexDir="column" gap="24px" w="100vw">
                <PreText text={item.heading} />
                <Image as={item.image} />
                <>{item.component}</>
                <Box h="64px" />
              </Center>
            ))}
            <Center
              as="button"
              type="button"
              disabled={buttonProgress !== 100 ?? false}
              w="240px"
              h="56px"
              color="white"
              bg="black300"
              fontWeight="bold"
              fontSize="1.6rem"
              pos="absolute"
              inset={`auto 100vw ${4 + 56}px 0`}
              transform={`translateX(${page === 0 ? "0" : "100vw"})`}
              transition="transform 0.3s"
              m="auto"
              rounded="full"
              overflow="hidden"
              onClick={() => {
                setPage(page + 1);
                setButtonProgress(0);
              }}
              sx={{
                "&::before": {
                  content: '""',
                  display: "block",
                  w: `${buttonProgress}%`,
                  h: "100%",
                  bg: "skyblue",
                  position: "absolute",
                  inset: "0 auto auto 0",
                  transition: "width 0.4s",
                },
              }}
            >
              <Text as="span" pos="relative" zIndex={2}>
                次へ
              </Text>
            </Center>
          </Flex>
          <Center flexDir="column" gap="24px" w="100vw">
            <PreText text={`おめでとう！🎉\n登録が完了しました！`} />
            <Image as={SvgImageEnqueteComplete} />
            <Center
              as="p"
              color="black600"
              fontSize="1.3rem"
              lineHeight="2.2rem"
              textAlign="center"
            >
              会員登録をしていただき、ありがとうございます！
              <br />
              さまざまな作品があなたを待っていますよ！
            </Center>
            <Center
              as="button"
              type="button"
              display="flex"
              w="240px"
              h="64px"
              color="white"
              bg="greenToBlue"
              rounded="full"
              fontWeight="bold"
              fontSize="1.6rem"
              onClick={() => localStorageSignIn()}
            >
              舞台を探しに行く！
            </Center>
          </Center>
        </Flex>
      </Box>
    </>
  );
};

export default Enquete;
