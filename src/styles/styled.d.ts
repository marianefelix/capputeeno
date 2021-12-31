import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    palette: {
      brand: {
        blue: string;
        orange: string;
      };
      text: {
        title: string;
        text: string;
        support: string;
      };
      shape: {
        primary: string;
        secondary: string;
        grey: string;
      };
      others: {
        red: string;
        green: string;
        orange_low: string;
      };
    };
  }
}
