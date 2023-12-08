import { FC } from "react";
import { Center, Image } from "@chakra-ui/react";

import IconFavorite from "src/assets/svg/navigation_favorite.svg";

const FavoriteButton: FC = () => {
  return (
    <Center
      as="button"
      w="32px"
      h="32px"
      bg="white"
      pos="absolute"
      inset="8px 6px auto auto"
      rounded="full"
      textStyle="deepShadow"
    >
      <Image as={IconFavorite} w="20px" h="20px" fill="primary" />
    </Center>
  );
};

export default FavoriteButton;
