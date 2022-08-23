/* Theme 타입 설정 파일 */

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
    };
  }
}
