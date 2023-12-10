import { FC, useState } from "react";
import { Center, Image } from "@chakra-ui/react";

import IconFavoriteEnabled from "src/assets/svg/navigation_favorite_on.svg";

type Props = {
  getIsFavorite: boolean;
  isFixed?: boolean;
};

const FavoriteStageButton: FC<Props> = ({ getIsFavorite, isFixed = false }) => {
  const [isFavorite, setIsFavorite] = useState(getIsFavorite);

  return (
    <Center
      as="button"
      type="button"
      w="32px"
      h="32px"
      bg="white"
      rounded="full"
      flex="none"
      textStyle="deepShadow"
      sx={{
        ...(isFixed && {
          pos: "absolute",
          inset: "20px 16px auto auto",
        }),
      }}
    >
      <Image
        as={IconFavoriteEnabled}
        w="20px"
        h="20px"
        fill={isFavorite ? "primary" : "black400"}
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </Center>
  );
};

export default FavoriteStageButton;
