import { FC, useState } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { NAVIGATION_CONTENTS } from "src/constants/nav";
import { FILTER_COLUMNS, FILTER_STAGES } from "src/constants/filter";

import Modal from "src/components/Modal";
import IconSearch from "src/components/Icon/IconSearch";
import IconBackArrow from "src/components/Icon/IconBackArrow";

import Logo from "src/assets/svg/logo.svg";

type Props = {
  path: string;
  isBack?: boolean;
  isSearch?: boolean;
};

const Header: FC<Props> = ({ path, isBack, isSearch }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigation = NAVIGATION_CONTENTS.find(
    (content) => content.path === path
  );

  return (
    <>
      <Center
        as="header"
        w="100vw"
        h="64px"
        bg="white"
        fontSize="1.9rem"
        fontWeight="bold"
        m="auto"
        pos="fixed"
        inset="0 0 auto 0"
        textStyle="lightShadow"
        zIndex="10"
      >
        {isBack && <IconBackArrow onClick={() => router.back()} />}
        {path === "/" ? (
          <Box w="160px" mt="10px">
            <Image as={Logo} />
          </Box>
        ) : (
          <Text as="span">{navigation?.label}</Text>
        )}
        {isSearch && <IconSearch onClick={() => setIsOpen(!isOpen)} />}
      </Center>
      {isSearch && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          target={path === "/" ? "チケット" : "コラム"}
          filter={path === "/" ? FILTER_STAGES : FILTER_COLUMNS}
        />
      )}
    </>
  );
};

export default Header;
