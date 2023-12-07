import { FC, SVGProps } from "react";

export type SignInGuidancePageType = Record<
  "/columns" | "/tickets" | "/favorites",
  { path: FC<SVGProps<SVGElement>>; heading: string; text: string }
>;
