import { FC, SVGProps } from "react";

export type SignInGuidancePageType = Record<
  "/column" | "/ticket" | "/fav",
  { path: FC<SVGProps<SVGElement>>; heading: string; text: string }
>;
