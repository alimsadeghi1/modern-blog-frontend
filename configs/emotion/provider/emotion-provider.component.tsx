'use client';

import { ThemeProvider } from "@emotion/react";
import { IEmotionProvider } from "./emotion-provider.type";
import { emotionThemeLight } from "../themes/light/emotion-theme-light";

export default function EmotionProviderComponent({
  children,
}: IEmotionProvider) {
  return <ThemeProvider theme={emotionThemeLight}>{children}</ThemeProvider>;
}
