import { IEmotionTheme } from "../configs/emotion/themes/theme.type";

declare module "@emotion/react" {
  export interface Theme extends IEmotionTheme {}
}
