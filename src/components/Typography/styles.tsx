import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TypographyProps } from ".";

const h1Style = css`
  font-size: 38px;
  line-height: 57px;
`;
const h2Style = css`
  font-size: 32px;
  line-height: 48px;
`;

const h3Style = css`
  font-size: 24px;
  line-height: 36px;
`;

const paragraphStyle = css`
  font-size: 14px;
  line-height: 22px;
`;

interface TypographyLayoutProps extends TypographyProps {}

export const TypographyLayout = styled.h3<TypographyLayoutProps>`
  ${({ variant }) => variant === "h1" && h1Style}
  ${({ variant }) => variant === "h2" && h2Style}
  ${({ variant }) => variant === "h3" && h3Style}
  ${({ variant }) => variant === "paragraph" && paragraphStyle}
  color: ${({ color }) => color};
`;
