import { Box, Flex, Text, color } from "@chakra-ui/react";
import type { NextPage } from "next";
import OriginalSpacer from "src/components/OriginalSpacer";
import useGetDay from "src/hooks/useGetDay";

const Coupon: NextPage = () => {
  const today = useGetDay();
  const coupons: any = [
    {
      name: "ぬいぐるみ1点",
      percent: 10,
      start: { y: 2021, m: 0o1, d: 0o1 },
      end: { y: 2022, m: 0o4, d: 10 },
    },
    {
      name: "きせかえ1点",
      percent: 10,
      start: { y: 2022, m: 0o1, d: 0o1 },
      end: { y: 2023, m: 0o4, d: 10 },
    },
  ];

  return (
    <>
      {today && (
        <Flex as="ul" flexDirection="column" gap="20px" p="0 2vw">
          {coupons.map((item: any, i: number) => (
            <Box
              as="li"
              key={item.name + i}
              sx={{
                "&::after": {
                  content: "''",
                  display: "block",
                  w: "100%",
                  h: "1px",
                  bg: "black200",
                  margin: "12px 0 0",
                },
              }}
            >
              <Flex alignItems="center" gap="8px" fontSize="1.2rem">
                <Box
                  bg="primary500"
                  p="4px 16px"
                  rounded="full"
                  fontWeight="bold"
                >
                  {(today.y > item.start.y ||
                    (today.y === item.start.y && today.m > item.start.m) ||
                    (today.y === item.start.y &&
                      today.m === item.start.m &&
                      today.d >= item.start.d)) &&
                  (today.y < item.end.y ||
                    (today.y === item.end.y && today.m < item.end.m) ||
                    (today.y === item.end.y &&
                      today.m === item.end.m &&
                      today.d <= item.end.d))
                    ? "利用可"
                    : "利用不可"}
                </Box>
                <Text>
                  <Text
                    as="span"
                    sx={{
                      "&::after": {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.start.y}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      "&::after": {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.start.m}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      "&::after": {
                        content: "'〜'",
                      },
                    }}
                  >
                    {item.start.d}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      "&::after": {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.end.y}
                  </Text>
                  <Text
                    as="span"
                    sx={{
                      "&::after": {
                        content: "'/'",
                      },
                    }}
                  >
                    {item.end.m}
                  </Text>
                  <Text as="span">{item.end.d}</Text>
                </Text>
              </Flex>
              <OriginalSpacer size="16px" />
              <Text fontWeight="bold">{item.name}</Text>
              <Text color="important" fontWeight="bold">
                <Text as="span" fontSize="3rem">
                  {item.percent}
                </Text>
                <Text as="span" fontSize="2rem">
                  %OFF
                </Text>
              </Text>
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
};

export default Coupon;
