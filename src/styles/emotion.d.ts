/* Theme 타입 설정 파일 */

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      cyan: ColorObject;
    };
    typography: {
      h1: TypographyObject;
      h2: TypographyObject;
      h3: TypographyObject;
      paragraph: TypographyObject;
    };
  }

  export interface ColorObject {
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

  export interface TypographyObject {
    fontSize: string;
    lineHeight: string;
  }
}
