import { FC } from "react";
import { Center } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Back: FC = () => {
  const router = useRouter();

  return (
    <Center
      as="button"
      type="button"
      w="32px"
      h="32px"
      bg="rgba(255, 255, 255, 0.7)"
      pos="absolute"
      inset="24px auto auto 0"
      rounded="full"
      zIndex={3}
      textStyle="lightShadow"
      flex="none"
      sx={{
        "&::before": {
          content: '""',
          display: "block",
          w: "12px",
          h: "3px",
          bg: "black800",
          position: "absolute",
          inset: "11px 0 auto -3px",
          margin: "auto",
          rounded: "2px",
          transform: "rotateZ(-45deg)",
        },
        "&::after": {
          content: '""',
          display: "block",
          w: "12px",
          h: "3px",
          bg: "black800",
          position: "absolute",
          inset: "auto 0 11px -3px",
          margin: "auto",
          rounded: "2px",
          transform: "rotateZ(45deg)",
        },
      }}
      onClick={() => router.back()}
    />
  );
};

export default Back;
