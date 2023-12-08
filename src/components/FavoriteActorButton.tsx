import { FC } from "react";
import { Center, Image } from "@chakra-ui/react";

import IconFavorite from "src/assets/svg/icon_favorite_actor.svg";

const FavoriteActorButton: FC = () => {
  return (
    <Center
      as="button"
      type="button"
      w="32px"
      h="32px"
      bg="white"
      pos="absolute"
      inset="auto 2px 2px auto"
      rounded="full"
      textStyle="deepShadow"
    >
      <Image as={IconFavorite} w="20px" h="20px" fill="pink" />
    </Center>
  );
};

export default FavoriteActorButton;
