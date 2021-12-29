import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      brand: {
        blue: string;
        orange: string;
      };
      text: {
        title: string;
        text: string;
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
