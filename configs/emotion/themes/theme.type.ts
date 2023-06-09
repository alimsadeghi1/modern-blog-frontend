export interface EmotionColorAmount {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface IEmotionTheme {
  colors: {
    base: {
      white: string,
      black: string;
    };
    primary: EmotionColorAmount;
    secondary: EmotionColorAmount;
    error: EmotionColorAmount;
    success: EmotionColorAmount;
    surface: EmotionColorAmount;
    text: EmotionColorAmount;
    border: EmotionColorAmount;
    shadow: EmotionColorAmount;
    linearGradients: {
      primary: string;
    };
  };
  sizes: {
    borderRadius: {
      xs: number;
    };
  };
}
