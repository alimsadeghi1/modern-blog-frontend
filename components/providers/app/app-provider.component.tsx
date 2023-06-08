import CssResetProviderComponent from "../css-reset/css-reset-provider.component";
import { IAppProvider } from "./app-provider.type";
import EmotionProviderComponent from "@/configs/emotion/provider/emotion-provider.component";

export default function AppProviderComponent({ children }: IAppProvider) {
  return (
    <CssResetProviderComponent>
      <EmotionProviderComponent>{children}</EmotionProviderComponent>
    </CssResetProviderComponent>
  );
}
