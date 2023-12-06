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
  back?: boolean;
  search?: boolean;
};

const Header: FC<Props> = ({ path, back, search }) => {
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
        pos="fixed"
        inset="0 0 auto auto"
        textStyle="lightShadow"
        zIndex="10"
      >
        {back && <IconBackArrow onClick={() => router.back()} />}
        {path === "/" ? (
          <Box w="160px" mt="10px">
            <Image as={Logo} />
          </Box>
        ) : (
          <Text as="span">{navigation?.label}</Text>
        )}
        {search && <IconSearch onClick={() => setIsOpen(!isOpen)} />}
      </Center>
      {search && (
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
