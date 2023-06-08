'use client';

import { Global } from "@emotion/react";
import { CssResetProviderStyle } from "./css-reset-provider.style";
import { ICssResetProvider } from "./css-reset-provider.type";

export default function CssResetProviderComponent({
  children,
}: ICssResetProvider) {
  return (
    <>
      <Global styles={CssResetProviderStyle} />
      {children}
    </>
  );
}
