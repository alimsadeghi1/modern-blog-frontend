import { IAppProvider } from "./app-provider.type";
import EmotionProviderComponent from "@/configs/emotion/provider/emotion-provider.component";

export default function AppProviderComponent({ children }: IAppProvider) {
  return <EmotionProviderComponent>{children}</EmotionProviderComponent>;
}
