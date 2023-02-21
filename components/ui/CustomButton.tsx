import React from 'react';
import styled from 'styled-components';
import { StringLiteral } from 'typescript';

interface CustomButtonProps {
  children?: React.ReactNode;
  backgoundColor?: string;
  fontSize?: string;
  paddingRow?: string;
  paddingColumns?: string;
  fontColor?: string;
  onClick?: any;
  borderColor?:string
}

export default function CustomButton({
  children,
  backgoundColor,
  fontSize,
  paddingRow,
  paddingColumns,
  fontColor,
  onClick,
  borderColor
}: CustomButtonProps) {
  return (
    <Button
      backgoundColor={backgoundColor}
      paddingRow={paddingRow}
      paddingColumns={paddingColumns}
      fontSize={fontSize}
      onClick={onClick}
      fontColor={fontColor}
      borderColor={borderColor}
>
      {children}
    </Button>
  );
}

const Button = styled.button<CustomButtonProps>`
  padding: ${(props) => props.paddingColumns}rem
    ${(props) => props.paddingRow}rem;
  color: ${(props) => props.fontColor};
  background: ${(props) => props.backgoundColor};
  border-radius: 0.625rem;
  cursor: pointer;
  border:1px solid ${props=>props.borderColor}
`;
